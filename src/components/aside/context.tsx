import { createContext, useContext, useMemo, useState } from 'react'
import type { AsideContext, AsideProviderProps } from './type'

export const asideContext = createContext<AsideContext | null>(null)

export const AsideProvider = (props: AsideProviderProps) => {
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

  return <asideContext.Provider value={val}>{children}</asideContext.Provider>
}

export const useAside = () => {
  const val = useContext(asideContext)

  if (!val) {
    throw new Error('useAside only used in AsideProvider')
  }

  return val
}
