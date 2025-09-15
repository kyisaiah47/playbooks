import { prisma } from '../prisma';
import type { User, TemplateSession, UserResponse, SavedResource } from '../../generated/prisma';

// Types for user data operations
export interface CreateTemplateSessionData {
  userId: string;
  templateId: string;
  title: string;
}

export interface UpdateTemplateSessionData {
  sessionId: string;
  progress?: number;
  currentSection?: string;
  isCompleted?: boolean;
  metadata?: any;
}

export interface CreateUserResponseData {
  userId: string;
  sessionId: string;
  templateId: string;
  sectionId: string;
  promptId: string;
  response: string;
  metadata?: any;
}

export interface SaveResourceData {
  userId: string;
  templateId: string;
  resourceId: string;
  title: string;
  userNotes?: string;
}

// User Data Service
export class UserDataService {
  // Template Sessions
  static async createTemplateSession(data: CreateTemplateSessionData): Promise<TemplateSession> {
    return await prisma.templateSession.create({
      data: {
        userId: data.userId,
        templateId: data.templateId,
        title: data.title,
      },
    });
  }

  static async getTemplateSession(sessionId: string): Promise<TemplateSession | null> {
    return await prisma.templateSession.findUnique({
      where: { id: sessionId },
      include: {
        responses: true,
        user: true,
      },
    });
  }

  static async getUserTemplateSessions(userId: string): Promise<TemplateSession[]> {
    return await prisma.templateSession.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      include: {
        responses: true,
      },
    });
  }

  static async updateTemplateSession(data: UpdateTemplateSessionData): Promise<TemplateSession> {
    const updateData: any = {};
    if (data.progress !== undefined) updateData.progress = data.progress;
    if (data.currentSection !== undefined) updateData.currentSection = data.currentSection;
    if (data.isCompleted !== undefined) updateData.isCompleted = data.isCompleted;
    if (data.metadata !== undefined) updateData.metadata = data.metadata;
    
    return await prisma.templateSession.update({
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
        sessionId_promptId: {
          sessionId: data.sessionId,
          promptId: data.promptId,
        },
      },
      create: {
        userId: data.userId,
        sessionId: data.sessionId,
        templateId: data.templateId,
        sectionId: data.sectionId,
        promptId: data.promptId,
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

  static async getUserResponsesForTemplate(userId: string, templateId: string): Promise<UserResponse[]> {
    return await prisma.userResponse.findMany({
      where: {
        userId,
        templateId,
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
        templateId: data.templateId,
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
      prisma.templateSession.count({ where: { userId } }),
      prisma.templateSession.count({ where: { userId, isCompleted: true } }),
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

  // Template Analytics (for admin/insights)
  static async getTemplateStats(templateId: string) {
    const [
      totalSessions,
      completedSessions,
      averageProgress,
    ] = await Promise.all([
      prisma.templateSession.count({ where: { templateId } }),
      prisma.templateSession.count({ where: { templateId, isCompleted: true } }),
      prisma.templateSession.aggregate({
        where: { templateId },
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