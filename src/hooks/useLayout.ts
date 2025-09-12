import { useQuery } from '@tanstack/react-query'
import { fetchLayout } from '../services/api'
import type { Layout } from '../types'

export function useLayout():
  { layout: Layout | undefined; isLoading: boolean; error: unknown } {
  const { data, isLoading, error } = useQuery({
    queryKey: ['layout'],
    queryFn: fetchLayout,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
  return { layout: data, isLoading, error }
}

