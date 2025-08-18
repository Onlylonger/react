import type { PropsWithChildren, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export type AsideContext = {
  open: boolean
  toggle: () => void
}

export type AsideProviderProps = PropsWithChildren<{}>

export type AsideTriggerProps = {
  render: (val: AsideContext) => ReactNode
}

type Item = {
  title: string
  url?: string
  icon?: LucideIcon
  key?: string
}

export type AsideListItem = {
  groupTitle: string
  key?: string
  menusList: (Item & {
    children?: Item[]
    collapsible?: boolean
  })[]
}

export type AsideProps = PropsWithChildren<{
  className?: string
  title?: ReactNode
  footer?: ReactNode
  defaultList: AsideListItem[]
  activeKey: string
  onNav?: (item: Item) => void
}>

export type AsideContentProps = PropsWithChildren<{}>
