import { z } from 'zod'

// Field Definition Schema
export const FieldDefinitionSchema = z.object({
  label: z.string(),
  type: z.enum(['text', 'email', 'tel', 'chips']).optional(),
  required: z.boolean().optional(),
})

export const FieldDefinitionsSchema = z.record(z.string(), FieldDefinitionSchema)

// Layout Section Schema
export const LayoutSectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  columns: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  fields: z.array(z.string()),
})

// Layout Schema
export const LayoutSchema = z.object({
  title: z.string(),
  sections: z.array(LayoutSectionSchema),
})

// Contact Schema
export const ContactSchema = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

// Export inferred types
export type FieldDefinition = z.infer<typeof FieldDefinitionSchema>
export type FieldDefinitions = z.infer<typeof FieldDefinitionsSchema>
export type LayoutSection = z.infer<typeof LayoutSectionSchema>
export type Layout = z.infer<typeof LayoutSchema>
export type Contact = z.infer<typeof ContactSchema>

