import type { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'gray' | 'blue' | 'red' | 'green' | 'black'
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const colorClasses = {
  gray: 'text-gray-600',
  blue: 'text-blue-600',
  red: 'text-red-600',
  green: 'text-green-600',
  black: 'text-gray-900',
}

export default function Text({
  children,
  className = '',
  size = 'base',
  weight = 'normal',
  color = 'black',
}: TextProps) {
  const classes = [
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    className,
  ].join(' ')

  return <span className={classes}>{children}</span>
}

