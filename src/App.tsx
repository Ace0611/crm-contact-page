import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CRMDashboard from './components/organisms/CRMDashboard'
import { useContactsData } from './hooks/useContactData'
import { useContactFields } from './hooks/useContactFields'
import './styles/main.css'

const queryClient = new QueryClient()

function AppContent() {
  const { contacts, isLoading: contactsLoading, error: contactsError } = useContactsData()
  const { fields, isLoading: fieldsLoading, error: fieldsError } = useContactFields()

  if (contactsLoading || fieldsLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#6b7280'
      }}>
        Loading CRM Dashboard...
      </div>
    )
  }

  if (contactsError || fieldsError) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#dc2626'
      }}>
        Error loading data: {String(contactsError || fieldsError)}
      </div>
    )
  }

  if (!contacts || !fields || contacts.length === 0) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#6b7280'
      }}>
        No data available
      </div>
    )
  }

  return <CRMDashboard contacts={contacts} fields={fields} />
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App
