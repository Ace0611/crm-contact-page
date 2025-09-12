import React from 'react'

// Re-export all types from schemas for convenience
export type {
  FieldDefinition,
  Folder,
  FieldDefinitions,
  LayoutSection,
  Layout,
  Contact,
  MessageAction,
  MessageContent,
  MessageSender,
  Message,
  Conversation,
  ConversationsData,
} from './schemas'

// Additional utility types
export interface RenderOptions {
  className?: string
  showLabels?: boolean
  showSections?: boolean
  customFieldRenderer?: (fieldKey: string, value: unknown, fieldDef?: FieldDefinition) => React.ReactElement
}

export interface FolderConfig {
  id: string
  label: string
  icon?: string
  className?: string
  fields: string[]
}

