import { useQuery } from '@tanstack/react-query'
import { fetchContactData } from '../services/api'
import type { Contact } from '../types'

export function useContactData(contactId: string = 'c_001'):
  { contact: Contact | undefined; isLoading: boolean; error: unknown } {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contact', contactId],
    queryFn: () => fetchContactData(contactId),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
  return { contact: data, isLoading, error }
}

