import { useQuery } from '@tanstack/react-query'
import { fetchConversationsData } from '../services/api'
import type { ConversationsData, ContactConversations } from '../types'

export function useConversationsData(contactId?: string) {
  return useQuery<ConversationsData>({
    queryKey: ['conversationsData'],
    queryFn: fetchConversationsData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    select: (data) => {
      if (!contactId) return data
      return {
        conversations: {
          [contactId]: data.conversations[contactId] || {
            contactId,
            contactName: '',
            conversations: []
          }
        }
      }
    }
  })
}

export function useContactConversations(contactId: string) {
  return useQuery<ContactConversations | null>({
    queryKey: ['contactConversations', contactId],
    queryFn: async () => {
      const data = await fetchConversationsData()
      const contactData = data.conversations[contactId]
      console.log('useContactConversations - Fetching for contactId:', contactId)
      console.log('useContactConversations - Found data:', contactData)
      return contactData || null
    },
    staleTime: 0, // Always fetch fresh data
    gcTime: 60 * 60 * 1000, // 1 hour
  })
}
