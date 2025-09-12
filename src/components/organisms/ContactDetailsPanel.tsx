import { useState } from 'react'
import type { Contact, FieldDefinitions } from '../../types'
import Avatar from '../atoms/Avatar'

interface ContactDetailsPanelProps {
  contacts: Contact[]
  fields: FieldDefinitions
  className?: string
}

export default function ContactDetailsPanel({ contacts, fields, className = '' }: ContactDetailsPanelProps) {
  const [isContactCollapsed, setIsContactCollapsed] = useState(false)
  const [isAdditionalInfoCollapsed, setIsAdditionalInfoCollapsed] = useState(false)
  const [isDriverPreferencesCollapsed, setIsDriverPreferencesCollapsed] = useState(true) // Start collapsed as per original design
  const [searchTerm, setSearchTerm] = useState('')
  const [currentContactIndex, setCurrentContactIndex] = useState(0)

  // Get current contact
  const contact = contacts[currentContactIndex]
  const totalContacts = contacts.length

  // Pagination handlers
  const goToPreviousContact = () => {
    if (currentContactIndex > 0) {
      setCurrentContactIndex(currentContactIndex - 1)
    }
  }

  const goToNextContact = () => {
    if (currentContactIndex < totalContacts - 1) {
      setCurrentContactIndex(currentContactIndex + 1)
    }
  }

  // Helper function to get field value from contact
  const getFieldValue = (fieldKey: string) => {
    return (contact as any)[fieldKey] || ''
  }

  // Filter fields based on search term
  const filterFields = (fieldLabel: string, fieldValue: any) => {
    if (!searchTerm) return true
    const searchLower = searchTerm.toLowerCase()
    const fieldLabelLower = fieldLabel.toLowerCase()
    
    // Always show if field label matches search term
    if (fieldLabelLower.includes(searchLower)) return true
    
    // Show if field value matches search term (only if value exists)
    if (fieldValue) {
      // Handle different data types
      if (typeof fieldValue === 'string') {
        if (fieldValue.toLowerCase().includes(searchLower)) return true
      } else if (Array.isArray(fieldValue)) {
        // For arrays like followers, check if any item matches
        if (fieldValue.some(item => 
          typeof item === 'string' && item.toLowerCase().includes(searchLower)
        )) return true
      } else if (typeof fieldValue === 'number') {
        // For numbers, convert to string and check
        if (fieldValue.toString().includes(searchLower)) return true
      }
    }
    
    return false
  }

  // Check if a folder has any visible fields
  const hasVisibleFields = (folderFields: Array<{key: string, label: string, type: string}>) => {
    if (!searchTerm) return true
    return folderFields.some(field => {
      const value = getFieldValue(field.key)
      return filterFields(field.label, value)
    })
  }

  // Auto-expand sections when they have matching fields
  const contactFolder = fields.folders.find(folder => folder.name === 'Contact')
  const additionalInfoFolder = fields.folders.find(folder => folder.name === 'Additional Info')
  const driverPreferencesFolder = fields.folders.find(folder => folder.name === 'Head Car Driver Preferences')
  
  const shouldExpandContact = !isContactCollapsed || (searchTerm && contactFolder && hasVisibleFields(contactFolder.fields))
  const shouldExpandAdditionalInfo = !isAdditionalInfoCollapsed || (searchTerm && additionalInfoFolder && hasVisibleFields(additionalInfoFolder.fields))
  const shouldExpandDriverPreferences = !isDriverPreferencesCollapsed || (searchTerm && driverPreferencesFolder && hasVisibleFields(driverPreferencesFolder.fields))

  // Render meta fields (Owner, Followers) dynamically
  const renderMetaFields = () => {
    const metaFields = ['owner', 'followers']
    return metaFields.map(fieldKey => {
      const field = fields.folders
        .flatMap(folder => folder.fields)
        .find(f => f.key === fieldKey)
      
      if (!field) return null
      
      const value = getFieldValue(fieldKey)
      if (!value) return null
      
      if (fieldKey === 'owner') {
        return (
          <div key={fieldKey} className="meta-item">
            <label>{field.label}</label>
            <div className="meta-value">
              <Avatar name={value ? value.split(' ').map((n: string) => n[0]).join('') : 'DL'} size="sm" />
              <span>{value}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )
      }
      
      if (fieldKey === 'followers' && Array.isArray(value)) {
        return (
          <div key={fieldKey} className="meta-item">
            <label>{field.label}</label>
            <div className="meta-value">
              <div className="followers-avatars">
                {value.slice(0, 2).map((follower, index) => (
                  <Avatar key={index} name={follower.split(' ').map((n: string) => n[0]).join('')} size="sm" />
                ))}
              </div>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )
      }
      
      return null
    }).filter(Boolean)
  }

  // Render tags dynamically
  const renderTags = () => {
    const tags = getFieldValue('tags')
    if (!Array.isArray(tags) || tags.length === 0) return null
    
    return (
      <div className="contact-tags">
        <label className="tag-label">Tags</label>
        <div className="tag-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag tag-blue">
              {tag}
              <button className="tag-remove">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      </div>
    )
  }

  // Render fields for a folder
  const renderFolderFields = (folderFields: Array<{key: string, label: string, type: string}>) => {
    return folderFields.map(field => {
      const value = getFieldValue(field.key)
      if (!filterFields(field.label, value)) return null
      
      // Format value for display based on data type
      const formatValue = (val: any) => {
        if (val === null || val === undefined) return ''
        if (typeof val === 'string') return val
        if (Array.isArray(val)) return val.join(', ')
        if (typeof val === 'number') return val.toString()
        return String(val)
      }
      
      return (
        <div key={field.key} className="field-row">
          <div className="field-item">
            <label>{field.label}</label>
            <div className="field-value">{formatValue(value)}</div>
          </div>
        </div>
      )
    }).filter(Boolean)
  }

  return (
    <div className={`contact-details-panel ${className}`}>
      {/* Panel Header */}
      <div className="panel-header">
        <h3>Contact Details</h3>
        <div className="panel-actions">
          <span className="contact-pagination">{currentContactIndex + 1} of {totalContacts}</span>
          <div className="header-nav">
            <button 
              className="btn-icon" 
              onClick={goToPreviousContact}
              disabled={currentContactIndex === 0}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="btn-icon" 
              onClick={goToNextContact}
              disabled={currentContactIndex === totalContacts - 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Header */}
      <div className="contact-header">
        <div className="contact-main-row">
          <div className="contact-profile">
            <div className="contact-avatar-container">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" 
                alt={`${contact.firstName} ${contact.lastName}`}
                className="contact-avatar-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="contact-avatar-fallback" style={{ display: 'none' }}>
                {contact.firstName?.[0]}{contact.lastName?.[0]}
              </div>
            </div>
            <h2 className="contact-name">{contact.firstName || ''} {contact.lastName || ''}</h2>
          </div>
          <button className="btn-call">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </button>
        </div>
        
        <div className="contact-meta">
          {renderMetaFields()}
        </div>
        
        {renderTags()}
      </div>

      {/* Navigation Tabs */}
      <div className="contact-tabs">
        <button className="tab tab-active">All Fields</button>
        <button className="tab">DND</button>
        <button className="tab">Actions</button>
      </div>

      {/* Search */}
      <div className="contact-search">
        <div className="search-input">
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search Fields and Folders"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
          />
          <svg className="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Contact Section */}
      {contactFolder && hasVisibleFields(contactFolder.fields) && (
      <div className="contact-section">
        <div className="section-header">
          <h3>{contactFolder.name}</h3>
          <div className="section-actions">
            <button className="btn-add">+ Add</button>
            <button 
              className="section-toggle"
              onClick={() => setIsContactCollapsed(!isContactCollapsed)}
            >
              <svg 
                className={`w-4 h-4 transition-transform ${isContactCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {shouldExpandContact && (
          <div className="section-fields">
            {renderFolderFields(contactFolder.fields)}
          </div>
        )}
      </div>
      )}

      {/* Additional Info Section */}
      {additionalInfoFolder && hasVisibleFields(additionalInfoFolder.fields) && (
      <div className="contact-section">
        <div className="section-header">
          <h3>{additionalInfoFolder.name}</h3>
          <div className="section-actions">
            <button 
              className="section-toggle"
              onClick={() => setIsAdditionalInfoCollapsed(!isAdditionalInfoCollapsed)}
            >
              <svg 
                className={`w-4 h-4 transition-transform ${isAdditionalInfoCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {shouldExpandAdditionalInfo && (
          <div className="section-fields">
            {renderFolderFields(additionalInfoFolder.fields)}
          </div>
        )}
      </div>
      )}

      {/* Head Car Driver Preferences Section */}
      {driverPreferencesFolder && hasVisibleFields(driverPreferencesFolder.fields) && (
      <div className="contact-section">
        <div className="section-header">
          <h3>{driverPreferencesFolder.name}</h3>
          <div className="section-actions">
            <button 
              className="section-toggle"
              onClick={() => setIsDriverPreferencesCollapsed(!isDriverPreferencesCollapsed)}
            >
              <svg 
                className={`w-4 h-4 transition-transform ${isDriverPreferencesCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {shouldExpandDriverPreferences && (
          <div className="section-fields">
            {renderFolderFields(driverPreferencesFolder.fields)}
          </div>
        )}
      </div>
      )}
    </div>
  )
}