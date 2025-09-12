import React, { createElement } from 'react'
import type { Contact, FieldDefinitions, Layout, LayoutSection, FieldDefinition } from '../types'
import { getField } from '../features/contact/field-registry'

export interface RenderOptions {
  className?: string
  showLabels?: boolean
  showSections?: boolean
  customFieldRenderer?: (fieldKey: string, value: unknown, field: FieldDefinition) => JSX.Element
}

export function renderContactFromJson(
  contact: Contact,
  layout: Layout,
  fields: FieldDefinitions,
  options: RenderOptions = {}
): JSX.Element {
  const {
    className = '',
    showLabels = true,
    showSections = true,
    customFieldRenderer,
  } = options

  return (
    <div className={`space-y-8 ${className}`}>
      {showSections && (
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{layout.title}</h1>
      )}
      {layout.sections.map((section) => renderSection(section, contact, fields, customFieldRenderer))}
    </div>
  )
}

export function renderSection(
  section: LayoutSection,
  contact: Contact,
  fields: FieldDefinitions,
  customFieldRenderer?: (fieldKey: string, value: unknown, field: FieldDefinition) => JSX.Element
): JSX.Element {
  const gridCols = section.columns === 1 ? 'grid-cols-1' :
                   section.columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                   section.columns === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                   'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'

  return (
    <div key={section.id} className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.label}</h2>
      <div className={`grid ${gridCols} gap-4`}>
        {section.fields.map((fieldKey) => renderField(fieldKey, contact, fields, customFieldRenderer))}
      </div>
    </div>
  )
}

export function renderField(
  fieldKey: string,
  contact: Contact,
  fields: FieldDefinitions,
  customFieldRenderer?: (fieldKey: string, value: unknown, field: FieldDefinition) => JSX.Element
): JSX.Element {
  const fieldDef = fields[fieldKey]
  const value = (contact as Record<string, unknown>)[fieldKey]

  if (customFieldRenderer) {
    return customFieldRenderer(fieldKey, value, fieldDef)
  }

  const fieldType = fieldDef?.type ?? 'text'
  const FieldRenderer = getField(fieldType)

  return (
    <div key={fieldKey} className="space-y-1">
      <label className="text-sm text-gray-500 font-medium">
        {fieldDef?.label ?? fieldKey}
        {fieldDef?.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="rounded border p-3 bg-gray-50 min-h-[2.5rem] flex items-center">
        {createElement(FieldRenderer, { value, field: fieldDef! })}
      </div>
    </div>
  )
}
