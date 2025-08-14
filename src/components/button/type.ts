import type { ReactNode } from 'react'
import { type variants, type sizes } from './styles.css'

type ButtonSelf = {
  children?: ReactNode
  loading?: boolean
  render?: (props: ButtonRenderProps) => ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

export type ButtonRenderProps = {
  'data-slot': string
} & Omit<ButtonSelf, 'variant' | 'size' | 'render'> &
  Record<string, unknown>

export type ButtonProps = ButtonSelf & React.ComponentProps<'button'>
