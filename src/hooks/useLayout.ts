import { useQuery } from '@tanstack/react-query'
import { fetchLayout, fetchAlternativeLayout } from '../services/api'
import type { Layout } from '../types'

export function useLayout(layoutType: 'default' | 'alternative' = 'default'):
  { layout: Layout | undefined; isLoading: boolean; error: unknown } {
  const { data, isLoading, error } = useQuery({
    queryKey: ['layout', layoutType],
    queryFn: layoutType === 'alternative' ? fetchAlternativeLayout : fetchLayout,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
  return { layout: data, isLoading, error }
}

