import { CollapsibleProvider, useCollapsible } from './context'
import type {
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleTriggerProps,
} from './type'

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
  const { render } = props

  const val = useCollapsible()

  if (typeof render !== 'function') return null

  return render(val)
}

export const Collapsible = (props: CollapsibleProps) => {
  const { children } = props

  return <CollapsibleProvider>{children}</CollapsibleProvider>
}

export const CollapsibleContent = (props: CollapsibleContentProps) => {
  const { children } = props
  const val = useCollapsible()

  if (!val?.open) return null

  return children
}
