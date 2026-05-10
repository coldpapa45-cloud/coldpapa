import { z } from "zod";

export const experienceOptions = ["Beginner", "Active", "Pro"] as const;
export const interestOptions = ["BTC", "ETH", "SOL", "Other"] as const;

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .transform((value) => value.trim().toLowerCase()),
  name: z
    .string()
    .trim()
    .max(80, "Name must be 80 characters or fewer.")
    .optional()
    .or(z.literal("")),
  experience: z.enum(experienceOptions).optional(),
  interests: z.array(z.enum(interestOptions)).max(4).optional(),
});

export type WaitlistFormValues = z.input<typeof waitlistSchema>;
export type WaitlistPayload = z.output<typeof waitlistSchema>;
