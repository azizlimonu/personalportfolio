import { z } from "zod"

export const validationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
    }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email(),
  subject: z
    .string({
      required_error: "Subject Is Required"
    }),
  message: z
    .string({
      required_error: "Message is required.",
    }),
});