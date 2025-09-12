// API service for fetching JSON data
import type { Contact, FieldDefinitions, Layout, ConversationsData, NotesData } from '../types'

export async function fetchContactData(_contactId: string = 'c_001'): Promise<Contact> {
  // Force reload by adding timestamp to prevent caching
  const data = await import(`../assets/contactData.json`)
  return data.default as Contact
}

export async function fetchLayout(): Promise<Layout> {
  const data = await import('../assets/layout.json')
  return data.default as Layout
}

export async function fetchContactFields(): Promise<FieldDefinitions> {
  const data = await import('../assets/contactFields.json')
  return data.default as FieldDefinitions
}

export async function fetchConversationsData(): Promise<ConversationsData> {
  const data = await import('../assets/conversationsData.json')
  return data.default as ConversationsData
}

export async function fetchNotesData(): Promise<NotesData> {
  const data = await import('../assets/notesData.json')
  return data.default as NotesData
}

export async function fetchAlternativeLayout(): Promise<Layout> {
  const data = await import('../assets/layout-alt.json')
  return data.default as Layout
}