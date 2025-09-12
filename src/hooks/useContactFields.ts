import { useQuery } from '@tanstack/react-query'
import { fetchContactFields } from '../services/api'
import type { FieldDefinitions } from '../types'

export function useContactFields():
  { fields: FieldDefinitions | undefined; isLoading: boolean; error: unknown } {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contactFields'],
    queryFn: fetchContactFields,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
  return { fields: data, isLoading, error }
}

