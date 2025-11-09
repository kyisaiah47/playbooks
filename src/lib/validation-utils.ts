/**
 * Validation utilities for API routes
 */

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Validates if a string is a valid UUID v4 format
 */
export function isValidUUID(id: string): boolean {
  return UUID_REGEX.test(id);
}

/**
 * Validates multiple UUIDs
 */
export function areValidUUIDs(...ids: (string | null | undefined)[]): boolean {
  return ids.every(id => !id || isValidUUID(id));
}

/**
 * Sanitizes error messages to prevent information leakage
 * Maps technical database errors to user-friendly messages
 */
export function sanitizeErrorMessage(error: any): string {
  // Log the actual error for debugging (server-side only)
  if (process.env.NODE_ENV === 'development') {
    console.error('Database error:', error);
  }

  // Common Supabase/Postgres error patterns
  const errorMessage = error?.message || String(error);

  // Map specific errors to generic messages
  if (errorMessage.includes('duplicate key')) {
    return 'This record already exists';
  }

  if (errorMessage.includes('violates foreign key constraint')) {
    return 'Invalid reference to related data';
  }

  if (errorMessage.includes('violates not-null constraint')) {
    return 'Required field is missing';
  }

  if (errorMessage.includes('permission denied') || errorMessage.includes('RLS')) {
    return 'You do not have permission to access this resource';
  }

  if (errorMessage.includes('JWT')) {
    return 'Authentication failed. Please log in again';
  }

  // Generic fallback
  return 'An error occurred while processing your request';
}
