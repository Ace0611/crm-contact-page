import { useContactsData, useLayout, useContactFields } from '../../hooks'
import CRMDashboard from '../../components/organisms/CRMDashboard'

interface ContactPageContainerProps {
  className?: string
}

export default function ContactPageContainer({
  className = ''
}: ContactPageContainerProps) {
  const { contacts, isLoading: contactsLoading, error: contactsError } = useContactsData()
  const { layout, isLoading: layoutLoading, error: layoutError } = useLayout()
  const { fields, isLoading: fieldsLoading, error: fieldsError } = useContactFields()

  // Loading state
  if (contactsLoading || layoutLoading || fieldsLoading) {
    return (
      <div className="loading-state">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p className="text-gray-600">Loading contact information...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (contactsError || layoutError || fieldsError) {
    const errorMessage = String(contactsError || layoutError || fieldsError || 'Unknown error')
    return (
      <div className="error-state">
        <div className="error-content">
          <div className="error-icon text-red-500">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{errorMessage}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // No data state
  if (!contacts || !layout || !fields || contacts.length === 0) {
    return (
      <div className="error-state">
        <div className="error-content">
          <div className="error-icon text-gray-400">📭</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Data Available</h2>
          <p className="text-gray-600">Unable to load contact information.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <CRMDashboard
        contacts={contacts}
        fields={fields}
      />
    </div>
  )
}
