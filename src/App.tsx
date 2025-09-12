import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CRMDashboard from './components/organisms/CRMDashboard'
import { useContactData } from './hooks/useContactData'
import { useContactFields } from './hooks/useContactFields'
import './styles/main.css'

const queryClient = new QueryClient()

function AppContent() {
  const { contact, isLoading: contactLoading, error: contactError } = useContactData('c_001')
  const { fields, isLoading: fieldsLoading, error: fieldsError } = useContactFields()

  if (contactLoading || fieldsLoading) {
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

  if (contactError || fieldsError) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#dc2626'
      }}>
        Error loading data: {String(contactError || fieldsError)}
      </div>
    )
  }

  if (!contact || !fields) {
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

  return <CRMDashboard contact={contact} fields={fields} />
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App
