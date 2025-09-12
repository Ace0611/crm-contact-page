import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderContactFromJson, renderSection, renderField } from '../utils/jsonRenderer'
import type { Contact, FieldDefinitions, Layout } from '../types'

// Mock data
const mockContact: Contact = {
  id: 'c_001',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1-555-0123',
  street: '123 Main Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  company: 'Acme Corp',
  jobTitle: 'Software Engineer',
  tags: ['VIP', 'Enterprise', 'Technical']
}

const mockFields: FieldDefinitions = {
  firstName: { label: 'First Name', type: 'text', required: true },
  lastName: { label: 'Last Name', type: 'text', required: true },
  email: { label: 'Email', type: 'email', required: true },
  phone: { label: 'Phone', type: 'tel', required: false },
  street: { label: 'Street Address', type: 'text', required: false },
  city: { label: 'City', type: 'text', required: false },
  state: { label: 'State', type: 'text', required: false },
  zipCode: { label: 'ZIP Code', type: 'text', required: false },
  company: { label: 'Company', type: 'text', required: false },
  jobTitle: { label: 'Job Title', type: 'text', required: false },
  tags: { label: 'Tags', type: 'chips', required: false }
}

const mockLayout: Layout = {
  title: 'Contact Details',
  sections: [
    {
      id: 'personal',
      label: 'Personal Information',
      columns: 2,
      fields: ['firstName', 'lastName', 'email', 'phone']
    },
    {
      id: 'address',
      label: 'Address',
      columns: 2,
      fields: ['street', 'city', 'state', 'zipCode']
    },
    {
      id: 'professional',
      label: 'Professional',
      columns: 2,
      fields: ['company', 'jobTitle', 'tags']
    }
  ]
}

describe('jsonRenderer', () => {
  describe('renderContactFromJson', () => {
    it('should render contact with flat fields', () => {
      render(
        renderContactFromJson(mockContact, mockLayout, mockFields)
      )
      
      // Check if main container is rendered
      expect(document.body.firstChild).toBeInTheDocument()
      
      // Check if sections are rendered
      expect(screen.getByText('Personal Information')).toBeInTheDocument()
      expect(screen.getByText('Address')).toBeInTheDocument()
      expect(screen.getByText('Professional')).toBeInTheDocument()
      
      // Check if contact data is rendered
      expect(screen.getByText('John')).toBeInTheDocument()
      expect(screen.getByText('Doe')).toBeInTheDocument()
      expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
      expect(screen.getByText('+1-555-0123')).toBeInTheDocument()
    })

    it('should handle missing data gracefully', () => {
      const contactWithMissingData: Contact = {
        id: 'c_002',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com'
        // Missing phone, address, company, jobTitle, tags
      }

      render(
        renderContactFromJson(contactWithMissingData, mockLayout, mockFields)
      )
      
      // Should render existing data
      expect(screen.getByText('Jane')).toBeInTheDocument()
      expect(screen.getByText('Smith')).toBeInTheDocument()
      expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument()
      
      // Should handle missing fields gracefully
      expect(screen.getByText('Phone')).toBeInTheDocument()
      expect(screen.getByText('Street Address')).toBeInTheDocument()
    })
  })

  describe('renderSection', () => {
    it('should render section with correct grid layout', () => {
      const section = mockLayout.sections[0]
      render(
        renderSection(section, mockContact, mockFields)
      )
      
      expect(screen.getByText('Personal Information')).toBeInTheDocument()
      expect(screen.getByText('John')).toBeInTheDocument()
      expect(screen.getByText('Doe')).toBeInTheDocument()
    })
  })

  describe('renderField', () => {
    it('should render text field correctly', () => {
      const fieldDef = mockFields.firstName
      render(
        renderField('firstName', mockContact, mockFields)
      )
      
      expect(screen.getByText('First Name')).toBeInTheDocument()
      expect(screen.getByText('John')).toBeInTheDocument()
    })

    it('should render email field with mailto link', () => {
      const fieldDef = mockFields.email
      render(
        renderField('email', mockContact, mockFields)
      )
      
      const emailLink = screen.getByRole('link')
      expect(emailLink).toHaveAttribute('href', 'mailto:john.doe@example.com')
      expect(emailLink).toHaveTextContent('john.doe@example.com')
    })

    it('should render phone field with tel link', () => {
      const fieldDef = mockFields.phone
      render(
        renderField('phone', mockContact, mockFields)
      )
      
      const phoneLink = screen.getByRole('link')
      expect(phoneLink).toHaveAttribute('href', 'tel:+1-555-0123')
      expect(phoneLink).toHaveTextContent('+1-555-0123')
    })

    it('should render chips field correctly', () => {
      const fieldDef = mockFields.tags
      render(
        renderField('tags', mockContact, mockFields)
      )
      
      expect(screen.getByText('Tags')).toBeInTheDocument()
      expect(screen.getByText('VIP')).toBeInTheDocument()
      expect(screen.getByText('Enterprise')).toBeInTheDocument()
      expect(screen.getByText('Technical')).toBeInTheDocument()
    })

    it('should handle unknown field gracefully', () => {
      render(
        renderField('unknownField', mockContact, mockFields)
      )
      
      expect(screen.getByText('unknownField')).toBeInTheDocument()
    })

    it('should handle null values gracefully', () => {
      const contactWithNull = { ...mockContact, firstName: null }
      render(
        renderField('firstName', contactWithNull, mockFields)
      )
      
      expect(screen.getByText('First Name')).toBeInTheDocument()
    })
  })
})

