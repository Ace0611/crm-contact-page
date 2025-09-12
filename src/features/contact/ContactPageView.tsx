import { useState } from 'react'
import type { Contact, FieldDefinitions, Layout } from '../../types'
import { fetchAlternativeLayout } from '../../services/api'

interface ContactPageViewProps {
  contact: Contact
  layout: Layout
  fields: FieldDefinitions
  className?: string
}

export default function ContactPageView({ 
  contact, 
  layout, 
  fields, 
  className = ''
}: ContactPageViewProps) {
  const [currentLayout, setCurrentLayout] = useState<Layout>(layout)
  const [isLoading, setIsLoading] = useState(false)
  const [layoutType, setLayoutType] = useState<'default' | 'alt'>('default')

  // Load alternative layout
  const loadAlternativeLayout = async () => {
    setIsLoading(true)
    try {
      const altLayout = await fetchAlternativeLayout()
      setCurrentLayout(altLayout)
      setLayoutType('alt')
    } catch (error) {
      console.error('Failed to load alternative layout:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Load default layout
  const loadDefaultLayout = async () => {
    setIsLoading(true)
    try {
      setCurrentLayout(layout)
      setLayoutType('default')
    } catch (error) {
      console.error('Failed to load default layout:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Toggle between layouts
  const toggleLayout = () => {
    if (layoutType === 'default') {
      loadAlternativeLayout()
    } else {
      loadDefaultLayout()
    }
  }

  return (
    <div className={`contact-page ${className}`}>
      <div className="container">
        {/* Header Section with Toggle */}
        <div className="contact-header">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentLayout.title}
          </h1>
          <button
            onClick={toggleLayout}
            disabled={isLoading}
            className="btn btn-primary flex items-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="loading"></div>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Switch Layout</span>
              </>
            )}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Currently showing: {layoutType === 'default' ? 'Default Layout' : 'Alternative Layout'}
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid gap-8" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {currentLayout.sections.map((section) => {
            const gridCols = 
              section.columns === 1 ? 'grid-1' :
              section.columns === 2 ? 'grid-2' :
              section.columns === 3 ? 'grid-3' :
              'grid-4'

            return (
              <div key={section.id} className="contact-section">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.label}</h2>
                <div className={`grid ${gridCols} gap-4`}>
                  {section.fields.map((fieldKey) => {
                    const fieldDef = fields[fieldKey]
                    const value = (contact as Record<string, unknown>)[fieldKey]
                    
                    return (
                      <div key={fieldKey} className="field-row">
                        <label className="form-label">
                          {fieldDef?.label ?? fieldKey}
                          {fieldDef?.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        <div className="field-value">
                          {fieldDef?.type === 'email' ? (
                            <a href={`mailto:${value}`} className="link">
                              {String(value || '')}
                            </a>
                          ) : fieldDef?.type === 'tel' ? (
                            <a href={`tel:${value}`} className="link">
                              {String(value || '')}
                            </a>
                          ) : fieldDef?.type === 'chips' ? (
                            <div className="flex flex-wrap gap-1">
                              {Array.isArray(value) ? value.map((tag, i) => (
                                <span key={i} className="chip">
                                  {String(tag)}
                                </span>
                              )) : (
                                <span className="text-gray-500">No tags</span>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-900">{String(value || '')}</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
