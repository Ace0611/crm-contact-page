import type { ReactNode } from 'react'
import Text from '../atoms/Text'

interface FieldRowProps {
  label: string
  value: ReactNode
  required?: boolean
  className?: string
}

export default function FieldRow({ label, value, required = false, className = '' }: FieldRowProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <Text size="sm" color="gray" weight="medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Text>
      <div className="rounded border p-3 bg-gray-50 min-h-[2.5rem] flex items-center">
        {value}
      </div>
    </div>
  )
}

