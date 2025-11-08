/**
 * Centralized error logging utility
 * In production, this will integrate with error tracking services like Sentry
 */

interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  metadata?: Record<string, any>;
}

export class ErrorLogger {
  /**
   * Log an error with context
   * In production, this sends to error tracking service
   */
  static logError(error: unknown, context?: ErrorContext): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;

    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.error('[ErrorLogger]', {
        message: errorMessage,
        stack: errorStack,
        context,
        timestamp: new Date().toISOString(),
      });
    }

    // In production, send to error tracking service
    // TODO: Integrate with Sentry, LogRocket, or similar
    if (process.env.NODE_ENV === 'production') {
      // Example Sentry integration:
      // Sentry.captureException(error, { contexts: { custom: context } });

      // For now, log minimal info to prevent exposure
      console.error('[Error]', {
        message: errorMessage,
        component: context?.component,
        action: context?.action,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Log a warning (non-critical issues)
   */
  static logWarning(message: string, context?: ErrorContext): void {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Warning]', {
        message,
        context,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Log info for debugging
   */
  static logInfo(message: string, metadata?: Record<string, any>): void {
    if (process.env.NODE_ENV === 'development') {
      console.info('[Info]', {
        message,
        metadata,
        timestamp: new Date().toISOString(),
      });
    }
  }
}

/**
 * Helper to safely handle async operations with error logging
 */
export async function withErrorLogging<T>(
  fn: () => Promise<T>,
  context: ErrorContext,
  fallback?: T
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    ErrorLogger.logError(error, context);
    return fallback;
  }
}
