import { useState } from 'react'
import type { ReactNode } from 'react'
import Text from '../atoms/Text'

interface FolderProps {
  title: string
  children: ReactNode
  icon?: string
  className?: string
  defaultOpen?: boolean
}

export default function Folder({ 
  title, 
  children, 
  icon, 
  className = '', 
  defaultOpen = false 
}: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`border rounded-lg ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          {icon && <span className="text-gray-500">{icon}</span>}
          <Text weight="semibold">{title}</Text>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t bg-gray-50">
          {children}
        </div>
      )}
    </div>
  )
}

