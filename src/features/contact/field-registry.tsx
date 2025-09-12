import React from 'react'
import type { FieldDefinition } from '../../types'

// Field renderer function type
export type FieldRenderer = (props: { value: unknown; field: FieldDefinition }) => React.ReactElement

// Registry map for field types
const fieldRegistry = new Map<string, FieldRenderer>()

// Default field renderers
const StringField: FieldRenderer = ({ value }) => (
  <span className="text-gray-900">{String(value || '')}</span>
)

const EmailField: FieldRenderer = ({ value }) => (
  <span className="text-blue-600">{String(value || '')}</span>
)

const PhoneField: FieldRenderer = ({ value }) => (
  <span className="text-gray-900">{String(value || '')}</span>
)

const RadioField: FieldRenderer = ({ value }) => (
  <span className="text-gray-900">{String(value || '')}</span>
)

const MultiSelectField: FieldRenderer = ({ value }) => {
  const items = Array.isArray(value) ? value : []
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

const ChipsField: FieldRenderer = ({ value }) => {
  const tags = Array.isArray(value) ? value : []
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

// Register default field types
fieldRegistry.set('string', StringField)
fieldRegistry.set('email', EmailField)
fieldRegistry.set('phone', PhoneField)
fieldRegistry.set('radio', RadioField)
fieldRegistry.set('multi-select', MultiSelectField)
fieldRegistry.set('chips', ChipsField)

// Helper functions
export function registerField(type: string, renderer: FieldRenderer): void {
  fieldRegistry.set(type, renderer)
}

export function getField(type: string): FieldRenderer {
  return fieldRegistry.get(type) || StringField
}

export function hasField(type: string): boolean {
  return fieldRegistry.has(type)
}

export function getAllFieldTypes(): string[] {
  return Array.from(fieldRegistry.keys())
} 