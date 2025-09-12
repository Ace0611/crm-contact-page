import { useQuery } from '@tanstack/react-query'
import { fetchNotesData } from '../services/api'

export function useNotesData() {
  return useQuery({
    queryKey: ['notesData'],
    queryFn: fetchNotesData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
