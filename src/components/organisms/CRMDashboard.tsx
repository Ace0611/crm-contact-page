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

  return (
    <div className={`crm-dashboard ${className}`}>
      <div className="dashboard-content">
        <div className="dashboard-columns">
          <div className="column column-contact">
            <ContactDetailsPanel 
              contacts={contacts} 
              fields={fields} 
              currentContactIndex={currentContactIndex}
              onPrevious={handlePrevious}
              onNext={handleNext}
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
