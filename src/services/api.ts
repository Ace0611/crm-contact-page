// API service for fetching JSON data
import type { Contact, FieldDefinitions, Layout } from '../types'

const BASE_URL = '/src/assets'

export async function fetchContactData(contactId: string = 'c_001'): Promise<Contact> {
  const response = await fetch(`${BASE_URL}/contactData.json`)
  if (!response.ok) {
    throw new Error(`Failed to fetch contact data: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

export async function fetchLayout(): Promise<Layout> {
  const response = await fetch(`${BASE_URL}/layout.json`)
  if (!response.ok) {
    throw new Error(`Failed to fetch layout: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

export async function fetchContactFields(): Promise<FieldDefinitions> {
  const response = await fetch(`${BASE_URL}/contactFields.json`)
  if (!response.ok) {
    throw new Error(`Failed to fetch contact fields: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

export async function fetchAlternativeLayout(): Promise<Layout> {
  const response = await fetch(`${BASE_URL}/layout-alt.json`)
  if (!response.ok) {
    throw new Error(`Failed to fetch alternative layout: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

