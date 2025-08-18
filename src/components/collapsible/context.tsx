import { createContext, useContext, useMemo, useState } from 'react'
import type { CollapsibleContext, CollapsibleProviderProps } from './type'

export const collapsibleContext = createContext<CollapsibleContext | null>(null)

export const CollapsibleProvider = (props: CollapsibleProviderProps) => {
  const { children } = props

  const [open, setOpen] = useState(false)

  const val = useMemo(() => {
    return {
      open,
      toggle() {
        return setOpen((pre) => !pre)
      },
    }
  }, [open])

  return (
    <collapsibleContext.Provider value={val}>
      {children}
    </collapsibleContext.Provider>
  )
}

export const useCollapsible = () => {
  const val = useContext(collapsibleContext)

  if (!val) {
    throw new Error('useCollapsible only used in CollapsibleProvider')
  }

  return val
}
