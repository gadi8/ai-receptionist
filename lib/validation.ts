import { z } from 'zod';

const emptyToUndefined = z.literal('').transform(() => undefined);

export const leadSchema = z.object({
  businessId: z.string().cuid(),
  name: z
    .string()
    .trim()
    .min(2, 'Name is required'),
  phone: z
    .string()
    .trim()
    .min(7, 'Phone number is required')
    .max(20, 'Phone number is too long'),
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .optional()
    .or(emptyToUndefined),
  serviceType: z
    .string()
    .trim()
    .max(255)
    .optional()
    .or(emptyToUndefined),
  message: z
    .string()
    .trim()
    .max(2000)
    .optional()
    .or(emptyToUndefined),
  source: z.enum(['website', 'phone']).default('website')
});

export type LeadInput = z.infer<typeof leadSchema>;
