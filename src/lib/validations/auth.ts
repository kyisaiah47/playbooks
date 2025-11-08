import { z } from 'zod';

// Email validation schema
export const emailSchema = z.string()
  .email('Invalid email address')
  .min(1, 'Email is required')
  .max(255, 'Email must be less than 255 characters')
  .toLowerCase()
  .trim();

// Password validation schema
export const passwordSchema = z.string()
  .min(6, 'Password must be at least 6 characters')
  .max(100, 'Password must be less than 100 characters');

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
export const updateUserSchema = z.object({
  name: nameSchema,
  email: emailSchema.optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
