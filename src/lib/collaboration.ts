"use client"

// Lightweight collaboration system
export interface ShareableTemplate {
  id: string
  templateId: string
  title: string
  description: string
  createdBy: string
  createdAt: string
  responses: Record<string, string>
  permissions: SharePermissions
  collaborators: Collaborator[]
  comments: Comment[]
  version: number
}

export interface SharePermissions {
  view: boolean
  comment: boolean
  edit: boolean
  share: boolean
}

export interface Collaborator {
  id: string
  name: string
  email: string
  avatar?: string
  role: "owner" | "editor" | "viewer"
  addedAt: string
}

export interface Comment {
  id: string
  sectionId: string
  promptId?: string
  text: string
  author: Collaborator
  createdAt: string
  resolved: boolean
  replies: Comment[]
}

// Generate shareable link for a template
export function generateShareableLink(templateId: string, shareId: string): string {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://templata.org"
  return `${baseUrl}/shared/${templateId}/${shareId}`
}

// Create a shareable template (mock implementation)
export function createShareableTemplate(
  templateId: string,
  title: string,
  responses: Record<string, string>,
  permissions: Partial<SharePermissions> = {}
): ShareableTemplate {
  const defaultPermissions: SharePermissions = {
    view: true,
    comment: false,
    edit: false,
    share: false
  }

  const shareId = Math.random().toString(36).substr(2, 9)

  return {
    id: shareId,
    templateId,
    title: title || `Shared Template - ${new Date().toLocaleDateString()}`,
    description: "Shared template with responses and collaboration",
    createdBy: "current-user", // In real app, get from auth
    createdAt: new Date().toISOString(),
    responses,
    permissions: { ...defaultPermissions, ...permissions },
    collaborators: [
      {
        id: "current-user",
        name: "You",
        email: "user@example.com",
        role: "owner",
        addedAt: new Date().toISOString()
      }
    ],
    comments: [],
    version: 1
  }
}

// Share via various methods
export async function shareTemplate(
  shareableTemplate: ShareableTemplate,
  method: "link" | "email" | "social"
): Promise<{ success: boolean; shareUrl?: string; message?: string }> {
  const shareUrl = generateShareableLink(shareableTemplate.templateId, shareableTemplate.id)

  try {
    switch (method) {
      case "link":
        // Copy to clipboard
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(shareUrl)
          return { success: true, shareUrl, message: "Link copied to clipboard!" }
        } else {
          return { success: false, message: "Clipboard not supported" }
        }

      case "email":
        // Generate email URL
        const subject = encodeURIComponent(`Check out my ${shareableTemplate.title} template`)
        const body = encodeURIComponent(
          `I'd like to share my ${shareableTemplate.title} template with you.\n\n` +
          `You can view and collaborate on it here: ${shareUrl}\n\n` +
          `Made with Templata - Life doesn't have to start with a blank page`
        )
        const emailUrl = `mailto:?subject=${subject}&body=${body}`

        if (typeof window !== "undefined") {
          window.open(emailUrl)
        }
        return { success: true, shareUrl, message: "Email client opened!" }

      case "social":
        // Web Share API or fallback
        if (typeof navigator !== "undefined" && navigator.share) {
          await navigator.share({
            title: shareableTemplate.title,
            text: `Check out my ${shareableTemplate.title} template on Templata`,
            url: shareUrl
          })
          return { success: true, shareUrl, message: "Shared successfully!" }
        } else {
          // Fallback to Twitter
          const text = encodeURIComponent(`Check out my ${shareableTemplate.title} template on Templata`)
          const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`

          if (typeof window !== "undefined") {
            window.open(twitterUrl, '_blank')
          }
          return { success: true, shareUrl, message: "Social share opened!" }
        }

      default:
        return { success: false, message: "Unknown share method" }
    }
  } catch (error) {
    console.error("Share failed:", error)
    return { success: false, message: "Share failed. Please try again." }
  }
}

// Add comment to template
export function addComment(
  template: ShareableTemplate,
  sectionId: string,
  text: string,
  promptId?: string
): Comment {
  const comment: Comment = {
    id: Math.random().toString(36).substr(2, 9),
    sectionId,
    promptId,
    text,
    author: template.collaborators[0], // Current user
    createdAt: new Date().toISOString(),
    resolved: false,
    replies: []
  }

  template.comments.push(comment)
  return comment
}

// Get collaboration stats
export interface CollaborationStats {
  totalShares: number
  totalCollaborators: number
  totalComments: number
  totalViews: number
}

export function getCollaborationStats(userId: string): CollaborationStats {
  // Mock implementation - in real app this would come from a database
  return {
    totalShares: 12,
    totalCollaborators: 8,
    totalComments: 24,
    totalViews: 156
  }
}

// Get recent collaborations
export function getRecentCollaborations(userId: string, limit: number = 5): ShareableTemplate[] {
  // Mock implementation - in real app this would come from a database
  const mockCollaborations: ShareableTemplate[] = [
    {
      id: "share-1",
      templateId: "wedding-planning",
      title: "Sarah & Mike's Wedding Plan",
      description: "Wedding planning template with budget and vendor details",
      createdBy: userId,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      responses: {},
      permissions: { view: true, comment: true, edit: false, share: true },
      collaborators: [
        {
          id: userId,
          name: "You",
          email: "you@example.com",
          role: "owner",
          addedAt: new Date().toISOString()
        },
        {
          id: "collab-1",
          name: "Sarah Johnson",
          email: "sarah@example.com",
          role: "editor",
          addedAt: new Date().toISOString()
        }
      ],
      comments: [],
      version: 3
    }
  ]

  return mockCollaborations.slice(0, limit)
}

// Permission helpers
export function canEdit(template: ShareableTemplate, userId: string): boolean {
  const collaborator = template.collaborators.find(c => c.id === userId)
  return collaborator?.role === "owner" || collaborator?.role === "editor" || template.permissions.edit
}

export function canComment(template: ShareableTemplate, userId: string): boolean {
  const collaborator = template.collaborators.find(c => c.id === userId)
  return collaborator !== undefined || template.permissions.comment
}

export function canShare(template: ShareableTemplate, userId: string): boolean {
  const collaborator = template.collaborators.find(c => c.id === userId)
  return collaborator?.role === "owner" || template.permissions.share
}