export interface TabsItem {
  label: string
  value: string
  disabled?: boolean
}

export interface TabsProps {
  list: TabsItem[]
  value?: string
  onChange?: (action: 'select' | 'close', value: TabsItem) => void
  closable?: boolean
}
