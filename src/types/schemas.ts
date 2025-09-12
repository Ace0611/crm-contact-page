import { z } from 'zod'

// Field Definition Schema
export const FieldDefinitionSchema = z.object({
  key: z.string(),
  label: z.string(),
  type: z.enum(['string', 'email', 'phone', 'radio', 'multi-select', 'chips']),
  required: z.boolean().optional(),
})

// Folder Schema
export const FolderSchema = z.object({
  name: z.string(),
  fields: z.array(FieldDefinitionSchema),
})

// Field Definitions Schema (now folders-based)
export const FieldDefinitionsSchema = z.object({
  folders: z.array(FolderSchema),
})

// Layout Section Schema
export const LayoutSectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  columns: z.number().min(1).max(4),
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
  address: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  businessName: z.string().optional(),
  streetAddress: z.string().optional(),
  country: z.string().optional(),
  owner: z.string().optional(),
  followers: z.array(z.string()).optional(),
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

// Note Schema
export const NoteSchema = z.object({
  id: z.string(),
  content: z.string(),
  timestamp: z.string(),
  author: z.string().optional(),
})

// Notes Data Schema
export const NotesDataSchema = z.object({
  notes: z.array(NoteSchema),
})

// Export inferred types
export type FieldDefinition = z.infer<typeof FieldDefinitionSchema>
export type Folder = z.infer<typeof FolderSchema>
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
export type Note = z.infer<typeof NoteSchema>
export type NotesData = z.infer<typeof NotesDataSchema>

