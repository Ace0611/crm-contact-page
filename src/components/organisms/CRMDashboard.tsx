import { useState } from 'react'
import type { Contact, FieldDefinitions } from '../../types'
import Header from './Header'
import ContactDetailsPanel from './ContactDetailsPanel'
import ConversationsPanel from './ConversationsPanel'
import NotesPanel from './NotesPanel'
import Footer from './Footer'
import SidebarIcons from './SidebarIcons'

interface CRMDashboardProps {
  contact: Contact
  fields: FieldDefinitions
  className?: string
}

export default function CRMDashboard({ contact, fields, className = '' }: CRMDashboardProps) {
  const [currentContactIndex, setCurrentContactIndex] = useState(1)
  const totalContacts = 356

  const handlePrevious = () => {
    if (currentContactIndex > 1) {
      setCurrentContactIndex(currentContactIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentContactIndex < totalContacts) {
      setCurrentContactIndex(currentContactIndex + 1)
    }
  }

  return (
    <div className={`crm-dashboard ${className}`}>
      {/* <Header 
        contactName=""
        currentIndex={currentContactIndex}
        totalContacts={totalContacts}
        onPrevious={handlePrevious}
        onNext={handleNext}
      /> */}
      
      <div className="dashboard-content">
        <div className="dashboard-columns">
          <div className="column column-contact">
            <ContactDetailsPanel contact={contact} fields={fields} />
          </div>
          
          <div className="column column-conversations">
            <ConversationsPanel />
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
