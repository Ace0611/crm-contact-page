import { useState } from 'react'
import type { Contact, FieldDefinitions } from '../../types'
import ContactDetailsPanel from './ContactDetailsPanel'
import ConversationsPanel from './ConversationsPanel'
import NotesPanel from './NotesPanel'
import Footer from './Footer'
import SidebarIcons from './SidebarIcons'

interface CRMDashboardProps {
  contacts: Contact[]
  fields: FieldDefinitions
  className?: string
}

export default function CRMDashboard({ contacts, fields, className = '' }: CRMDashboardProps) {
  const [currentContactIndex, setCurrentContactIndex] = useState(0)
  const [layoutType, setLayoutType] = useState<'default' | 'alternative'>('default')
  const totalContacts = contacts.length
  const currentContact = contacts[currentContactIndex]

  const handlePrevious = () => {
    if (currentContactIndex > 0) {
      setCurrentContactIndex(currentContactIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentContactIndex < totalContacts - 1) {
      setCurrentContactIndex(currentContactIndex + 1)
    }
  }

  const toggleLayout = () => {
    setLayoutType(prev => prev === 'default' ? 'alternative' : 'default')
  }

  return (
    <div className={`crm-dashboard layout-${layoutType} ${className}`}>
      {/* Layout Toggle Button */}
      <div className="layout-toggle-container">
        <button 
          className="layout-toggle-btn"
          onClick={toggleLayout}
          title={`Switch to ${layoutType === 'default' ? 'alternative' : 'default'} layout`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span>Switch Layout</span>
        </button>
        <div className="layout-indicator">
          Current: {layoutType === 'default' ? 'Default Layout' : 'Alternative Layout'}
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-columns">
          <div className="column column-contact">
            <ContactDetailsPanel 
              contacts={contacts} 
              fields={fields} 
              currentContactIndex={currentContactIndex}
              onPrevious={handlePrevious}
              onNext={handleNext}
              layoutType={layoutType}
            />
          </div>
          
          <div className="column column-conversations">
            <ConversationsPanel contact={currentContact} />
          </div>
          
          <div className="column column-notes">
            <NotesPanel />
          </div>
          <div className="column column-icons">
            <SidebarIcons />
          </div>
        </div>
      </div>
      
      <Footer onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  )
}
