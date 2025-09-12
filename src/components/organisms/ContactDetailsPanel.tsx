import { useState } from 'react'
import type { Contact, FieldDefinitions } from '../../types'
import Avatar from '../atoms/Avatar'

interface ContactDetailsPanelProps {
  contact: Contact
  fields: FieldDefinitions
  className?: string
}

export default function ContactDetailsPanel({ contact, className = '' }: ContactDetailsPanelProps) {
  const [isContactCollapsed, setIsContactCollapsed] = useState(false)
  const [isAdditionalInfoCollapsed, setIsAdditionalInfoCollapsed] = useState(false)
  const [isDriverPreferencesCollapsed, setIsDriverPreferencesCollapsed] = useState(true) // Start collapsed as per original design
  const [searchTerm, setSearchTerm] = useState('')

  // Filter fields based on search term
  const filterFields = (fieldName: string, fieldValue: string | undefined) => {
    if (!searchTerm) return true
    if (!fieldValue) return false
    const searchLower = searchTerm.toLowerCase()
    return fieldName.toLowerCase().includes(searchLower) || 
           fieldValue.toLowerCase().includes(searchLower)
  }

  // Check if a section has any visible fields
  const hasVisibleFields = (fields: Array<{name: string, value: string | undefined}>) => {
    if (!searchTerm) return true
    return fields.some(field => filterFields(field.name, field.value))
  }

  return (
    <div className={`contact-details-panel ${className}`}>
      {/* Panel Header */}
      <div className="panel-header">
        <h3>Contact Details</h3>
        <div className="panel-actions">
          <span className="contact-pagination">1 of 356</span>
          <div className="header-nav">
            <button className="btn-icon">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="btn-icon">
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
          <div className="meta-item">
            <label>Owner</label>
            <div className="meta-value">
              <Avatar name="DL" size="sm" />
              <span>Devon Lane</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="meta-item">
            <label>Followers</label>
            <div className="meta-value">
              <div className="followers-avatars">
                <Avatar name="F1" size="sm" />
                <Avatar name="F2" size="sm" />
              </div>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="contact-tags">
          <label className="tag-label">Tags</label>
          <div className="tag-container">
            <span className="tag tag-blue">
              Shared Contact
              <button className="tag-remove">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
            <span className="tag tag-blue">
              VIP
              <button className="tag-remove">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
            <span className="tag tag-blue">+15</span>
            <button className="btn-add-tag">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
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
          />
          <svg className="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
      </div>

      {/* Contact Information Sections */}
      <div className="contact-sections">
        {hasVisibleFields([
          {name: 'First Name', value: contact.firstName},
          {name: 'Last Name', value: contact.lastName},
          {name: 'Phone Number', value: contact.phone},
          {name: 'Email', value: contact.email},
          {name: 'Address', value: `${contact.street}, ${contact.city}, ${contact.state} ${contact.zipCode}. USA.`}
        ]) && (
        <div className={`contact-section ${isContactCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header">
            <h3>Contact</h3>
            <div className="section-actions">
              <button className="btn-add">+ Add</button>
              <button 
                className="collapse-btn"
                onClick={() => setIsContactCollapsed(!isContactCollapsed)}
                aria-label={isContactCollapsed ? 'Expand Contact' : 'Collapse Contact'}
              >
                <svg 
                  className={`w-4 h-4 transition-transform ${isContactCollapsed ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="section-fields">
            <div className="field-row">
              {filterFields('First Name', contact.firstName) && (
                <div className="field-item">
                  <label>First Name</label>
                  <span className="field-value">{contact.firstName}</span>
                </div>
              )}
              {filterFields('Last Name', contact.lastName) && (
                <div className="field-item">
                  <label>Last Name</label>
                  <span className="field-value">{contact.lastName}</span>
                </div>
              )}
            </div>
            {filterFields('Phone Number', contact.phone) && (
              <div className="field-item">
                <label>Phone Number</label>
                <span className="field-value">
                  <span className="flag-icon">🇺🇸</span>
                  {contact.phone}
                </span>
              </div>
            )}
            {filterFields('Email', contact.email) && (
              <div className="field-item">
                <label>Email</label>
                <span className="field-value">{contact.email}</span>
              </div>
            )}
            {filterFields('Address', `${contact.street}, ${contact.city}, ${contact.state} ${contact.zipCode}. USA.`) && (
              <div className="field-item">
                <label>Address</label>
                <span className="field-value">
                  {contact.street}, {contact.city}, {contact.state} {contact.zipCode}. USA.
                </span>
              </div>
            )}
          </div>
        </div>
        )}

        {hasVisibleFields([
          {name: 'Business Name', value: contact.company},
          {name: 'Street Address', value: contact.street},
          {name: 'City', value: contact.city},
          {name: 'Country', value: 'United States'}
        ]) && (
        <div className={`contact-section ${isAdditionalInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header">
            <h3>Additional Info</h3>
            <div className="section-actions">
              <button 
                className="collapse-btn"
                onClick={() => setIsAdditionalInfoCollapsed(!isAdditionalInfoCollapsed)}
                aria-label={isAdditionalInfoCollapsed ? 'Expand Additional Info' : 'Collapse Additional Info'}
              >
                <svg 
                  className={`w-4 h-4 transition-transform ${isAdditionalInfoCollapsed ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="section-fields">
            {filterFields('Business Name', contact.company) && (
              <div className="field-item">
                <label>Business Name</label>
                <span className="field-value">{contact.company}</span>
              </div>
            )}
            {filterFields('Street Address', contact.street) && (
              <div className="field-item">
                <label>Street Address</label>
                <span className="field-value">{contact.street}</span>
              </div>
            )}
            {filterFields('City', contact.city) && (
              <div className="field-item">
                <label>City</label>
                <span className="field-value">{contact.city}</span>
              </div>
            )}
            {filterFields('Country', 'United States') && (
              <div className="field-item">
                <label>Country</label>
                <span className="field-value">United States</span>
              </div>
            )}
          </div>
        </div>
        )}

        <div className={`contact-section ${isDriverPreferencesCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header">
            <h3>Head Car Driver Preferences</h3>
            <div className="section-actions">
              <button 
                className="collapse-btn"
                onClick={() => setIsDriverPreferencesCollapsed(!isDriverPreferencesCollapsed)}
                aria-label={isDriverPreferencesCollapsed ? 'Expand Driver Preferences' : 'Collapse Driver Preferences'}
              >
                <svg 
                  className={`w-4 h-4 transition-transform ${isDriverPreferencesCollapsed ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="section-fields">
            <div className="field-item">
              <label>Driver Preferences</label>
              <span className="field-value">No preferences set</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}