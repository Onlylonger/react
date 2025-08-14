import type { VariantProps } from '@shilong/utils'
import type { ReactNode } from 'react'
import type { getBtnClx } from './style'

type ButtonSelf = {
  children?: ReactNode
  loading?: boolean
  render?: (props: ButtonRenderProps) => ReactNode
} & VariantProps<typeof getBtnClx>

export type ButtonRenderProps = {
  'data-slot': string
} & Omit<ButtonSelf, 'variant' | 'size' | 'render'> &
  Record<string, unknown>

export type ButtonProps = ButtonSelf & React.ComponentProps<'button'>
