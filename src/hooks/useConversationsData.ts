import { useQuery } from '@tanstack/react-query'
import { fetchConversationsData } from '../services/api'
import type { ConversationsData } from '../types'

export function useConversationsData() {
  return useQuery<ConversationsData>({
    queryKey: ['conversationsData'],
    queryFn: fetchConversationsData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
}
