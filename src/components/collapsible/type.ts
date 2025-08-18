import type { PropsWithChildren, ReactNode } from 'react'
import type { ButtonProps, ButtonRenderProps } from '../button'

export type CollapsibleContext = {
  open: boolean
  toggle: () => void
}

export type CollapsibleProviderProps = PropsWithChildren<{}>

export type CollapsibleTriggerProps = {
  render: (context: CollapsibleContext) => ReactNode
}

export type CollapsibleProps = PropsWithChildren<{}>

export type CollapsibleContentProps = PropsWithChildren<{}>
