import { z } from "zod";

export const basicInfoSchema = z.object({
  title: z.string().min(1, "RFP title is required").max(200, "Title must be under 200 characters"),
  organization: z.string().min(1, "Organization name is required").max(100, "Organization name must be under 100 characters"),
  department: z.string().min(1, "Department is required").max(100, "Department must be under 100 characters"),
  contact: z.object({
    name: z.string().min(1, "Contact name is required").max(100, "Contact name must be under 100 characters"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(1, "Phone number is required").regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
  }).required(),
  timeline: z.object({
    releaseDate: z.string().min(1, "Release date is required"),
    submissionDeadline: z.string().min(1, "Submission deadline is required"),
    decisionDate: z.string().min(1, "Decision date is required"),
  }),
}).refine((data) => {
  const release = new Date(data.timeline.releaseDate);
  const submission = new Date(data.timeline.submissionDeadline);
  const decision = new Date(data.timeline.decisionDate);
  
  return release < submission && submission < decision;
}, {
  message: "Dates must be in logical order: Release → Submission → Decision",
  path: ["timeline"]
});

export const projectOverviewSchema = z.object({
  overview: z.string().min(1, "Project overview is required"),
  background: z.string().min(1, "Background is required"),
  objectives: z.string().min(1, "Objectives are required"),
  scope: z.string().min(1, "Scope of work is required"),
});

export const requirementsSchema = z.object({
  requirements: z.string().min(1, "Technical requirements are required"),
  evaluation: z.string().min(1, "Evaluation criteria are required"),
  budget: z.string().min(1, "Budget information is required"),
  terms: z.string().min(1, "Terms and conditions are required"),
  submission: z.string().min(1, "Submission instructions are required"),
});

export const userPromptSchema = z.object({
  prompt: z.string().min(10, "Please provide at least 10 characters describing your requirements").max(1000, "Description must be under 1000 characters"),
});

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
export type ProjectOverviewFormData = z.infer<typeof projectOverviewSchema>;
export type RequirementsFormData = z.infer<typeof requirementsSchema>;
export type UserPromptFormData = z.infer<typeof userPromptSchema>;