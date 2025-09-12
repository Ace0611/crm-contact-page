import { useQuery } from '@tanstack/react-query'
import { fetchContactData, fetchContactById } from '../services/api'
import type { Contact, ContactData } from '../types'

export function useContactData(contactId: string = 'c_001'):
  { contact: Contact | undefined; isLoading: boolean; error: unknown } {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contact', contactId],
    queryFn: () => fetchContactById(contactId),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
  return { contact: data || undefined, isLoading, error }
}

export function useContactsData():
  { contacts: ContactData | undefined; isLoading: boolean; error: unknown } {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContactData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
  return { contacts: data, isLoading, error }
}

