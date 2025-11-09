import { z } from 'zod';

// Email validation schema
export const emailSchema = z.string()
  .email('Invalid email address')
  .min(1, 'Email is required')
  .max(255, 'Email must be less than 255 characters')
  .toLowerCase()
  .trim();

// Password validation schema with stronger requirements
export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .max(100, 'Password must be less than 100 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

// Name validation schema
export const nameSchema = z.string()
  .min(1, 'Name is required')
  .max(100, 'Name must be less than 100 characters')
  .trim()
  .optional();

// Login request schema
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// Signup request schema
export const signupSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  name: nameSchema,
});

// Forgot password request schema
export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

// Reset password request schema
export const resetPasswordSchema = z.object({
  password: passwordSchema,
});

// Update user request schema
// Note: Email changes are not supported for security reasons
// Users must use the password reset flow to change their email
export const updateUserSchema = z.object({
  name: nameSchema,
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
