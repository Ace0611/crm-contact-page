import React from 'react'
import type { FieldDefinition } from '../../types'

export type FieldRenderer = (value: unknown, field: FieldDefinition) => JSX.Element

export interface FieldRegistry {
  [key: string]: FieldRenderer
}

// Default field renderers
const defaultFieldRenderers: FieldRegistry = {
  text: (value) => <span className="text-gray-900">{String(value || '')}</span>,
  email: (value) => (
    <a href={`mailto:${value}`} className="text-blue-600 hover:text-blue-800">
      {String(value || '')}
    </a>
  ),
  tel: (value) => (
    <a href={`tel:${value}`} className="text-blue-600 hover:text-blue-800">
      {String(value || '')}
    </a>
  ),
  chips: (value) => {
    const tags = Array.isArray(value) ? value : []
    return (
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
          >
            {String(tag)}
          </span>
        ))}
      </div>
    )
  },
}

// Registry instance
let fieldRegistry: FieldRegistry = { ...defaultFieldRenderers }

export function registerField(type: string, renderer: FieldRenderer): void {
  fieldRegistry[type] = renderer
}

export function getField(type: string): FieldRenderer {
  return fieldRegistry[type] || defaultFieldRenderers.text
}

