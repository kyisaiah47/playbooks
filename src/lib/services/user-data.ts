import { prisma } from '../prisma';
import type { User, GuideSession, UserResponse, SavedResource } from '../../generated/prisma';

// Types for user data operations
export interface CreateTemplateSessionData {
  userId: string;
  guideId: string;
  title: string;
}

export interface UpdateTemplateSessionData {
  sessionId: string;
  progress?: number;
  currentSection?: string;
  isCompleted?: boolean;
  metadata?: Record<string, unknown>;
}

export interface CreateUserResponseData {
  userId: string;
  sessionId: string;
  guideId: string;
  sectionId: string;
  questionId: string;
  response: string;
  metadata?: Record<string, unknown>;
}

export interface SaveResourceData {
  userId: string;
  guideId: string;
  resourceId: string;
  title: string;
  userNotes?: string;
}

// User Data Service
export class UserDataService {
  // Guide Sessions
  static async createTemplateSession(data: CreateTemplateSessionData): Promise<GuideSession> {
    return await prisma.guideSession.create({
      data: {
        userId: data.userId,
        guideId: data.guideId,
        title: data.title,
      },
    });
  }

  static async getTemplateSession(sessionId: string): Promise<GuideSession | null> {
    return await prisma.guideSession.findUnique({
      where: { id: sessionId },
      include: {
        responses: true,
        user: true,
      },
    });
  }

  static async getUserTemplateSessions(userId: string): Promise<GuideSession[]> {
    return await prisma.guideSession.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      include: {
        responses: true,
      },
    });
  }

  static async updateTemplateSession(data: UpdateTemplateSessionData): Promise<GuideSession> {
    const updateData: any = {};
    if (data.progress !== undefined) updateData.progress = data.progress;
    if (data.currentSection !== undefined) updateData.currentSection = data.currentSection;
    if (data.isCompleted !== undefined) updateData.isCompleted = data.isCompleted;
    if (data.metadata !== undefined) updateData.metadata = data.metadata;
    
    return await prisma.guideSession.update({
      where: { id: data.sessionId },
      data: {
        ...updateData,
        updatedAt: new Date(),
      },
    });
  }

  // User Responses
  static async createUserResponse(data: CreateUserResponseData): Promise<UserResponse> {
    return await prisma.userResponse.upsert({
      where: {
        sessionId_questionId: {
          sessionId: data.sessionId,
          questionId: data.questionId,
        },
      },
      create: {
        userId: data.userId,
        sessionId: data.sessionId,
        guideId: data.guideId,
        sectionId: data.sectionId,
        questionId: data.questionId,
        response: data.response,
        metadata: data.metadata,
      },
      update: {
        response: data.response,
        metadata: data.metadata,
        updatedAt: new Date(),
      },
    });
  }

  static async getUserResponsesForSession(sessionId: string): Promise<UserResponse[]> {
    return await prisma.userResponse.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
    });
  }

  static async getUserResponsesForTemplate(userId: string, guideId: string): Promise<UserResponse[]> {
    return await prisma.userResponse.findMany({
      where: {
        userId,
        guideId,
      },
      orderBy: { createdAt: 'asc' },
      include: {
        session: true,
      },
    });
  }

  // Saved Resources
  static async saveResource(data: SaveResourceData): Promise<SavedResource> {
    return await prisma.savedResource.upsert({
      where: {
        userId_resourceId: {
          userId: data.userId,
          resourceId: data.resourceId,
        },
      },
      create: {
        userId: data.userId,
        guideId: data.guideId,
        resourceId: data.resourceId,
        title: data.title,
        userNotes: data.userNotes,
      },
      update: {
        userNotes: data.userNotes,
      },
    });
  }

  static async unsaveResource(userId: string, resourceId: string): Promise<void> {
    await prisma.savedResource.delete({
      where: {
        userId_resourceId: {
          userId,
          resourceId,
        },
      },
    });
  }

  static async getUserSavedResources(userId: string): Promise<SavedResource[]> {
    return await prisma.savedResource.findMany({
      where: { userId },
      orderBy: { savedAt: 'desc' },
    });
  }

  // User Analytics
  static async getUserStats(userId: string) {
    const [
      totalSessions,
      completedSessions,
      totalResponses,
      savedResourcesCount,
    ] = await Promise.all([
      prisma.guideSession.count({ where: { userId } }),
      prisma.guideSession.count({ where: { userId, isCompleted: true } }),
      prisma.userResponse.count({ where: { userId } }),
      prisma.savedResource.count({ where: { userId } }),
    ]);

    return {
      totalSessions,
      completedSessions,
      totalResponses,
      savedResourcesCount,
      completionRate: totalSessions > 0 ? completedSessions / totalSessions : 0,
    };
  }

  // Guide Analytics (for admin/insights)
  static async getTemplateStats(guideId: string) {
    const [
      totalSessions,
      completedSessions,
      averageProgress,
    ] = await Promise.all([
      prisma.guideSession.count({ where: { guideId } }),
      prisma.guideSession.count({ where: { guideId, isCompleted: true } }),
      prisma.guideSession.aggregate({
        where: { guideId },
        _avg: { progress: true },
      }),
    ]);

    return {
      totalSessions,
      completedSessions,
      completionRate: totalSessions > 0 ? completedSessions / totalSessions : 0,
      averageProgress: averageProgress._avg.progress || 0,
    };
  }
}