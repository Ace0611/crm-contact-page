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

// Message Action Schema
export const MessageActionSchema = z.object({
  type: z.enum(['star', 'reply', 'more']),
  icon: z.string(),
  filled: z.boolean().optional(),
})

// Message Content Schema
export const MessageContentSchema = z.object({
  text: z.string(),
  cta: z.object({
    text: z.string(),
    action: z.string(),
  }).optional(),
})

// Message Sender Schema
export const MessageSenderSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  recipient: z.string().optional(),
})

// Message Schema
export const MessageSchema = z.object({
  id: z.string(),
  type: z.enum(['email', 'whatsapp']),
  sender: MessageSenderSchema,
  timestamp: z.string(),
  actions: z.array(MessageActionSchema).optional(),
  content: MessageContentSchema,
  footer: z.object({
    replyButton: z.boolean(),
  }).optional(),
  platform: z.string().optional(),
})

// Conversation Schema
export const ConversationSchema = z.object({
  id: z.string(),
  subject: z.string(),
  threadCount: z.number(),
  messages: z.array(MessageSchema),
})

// Conversations Data Schema
export const ConversationsDataSchema = z.object({
  conversations: z.array(ConversationSchema),
})

// Export inferred types
export type FieldDefinition = z.infer<typeof FieldDefinitionSchema>
export type FieldDefinitions = z.infer<typeof FieldDefinitionsSchema>
export type LayoutSection = z.infer<typeof LayoutSectionSchema>
export type Layout = z.infer<typeof LayoutSchema>
export type Contact = z.infer<typeof ContactSchema>
export type MessageAction = z.infer<typeof MessageActionSchema>
export type MessageContent = z.infer<typeof MessageContentSchema>
export type MessageSender = z.infer<typeof MessageSenderSchema>
export type Message = z.infer<typeof MessageSchema>
export type Conversation = z.infer<typeof ConversationSchema>
export type ConversationsData = z.infer<typeof ConversationsDataSchema>

