// Re-export all types from schemas for convenience
export type {
  FieldDefinition,
  FieldDefinitions,
  LayoutSection,
  Layout,
  Contact,
} from './schemas'

// Additional utility types
export interface RenderOptions {
  className?: string
  showLabels?: boolean
  showSections?: boolean
  customFieldRenderer?: (fieldKey: string, value: unknown, fieldDef?: FieldDefinition) => JSX.Element
}

export interface FolderConfig {
  id: string
  label: string
  icon?: string
  className?: string
  fields: string[]
}

