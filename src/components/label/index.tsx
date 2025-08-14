import { clsx } from '@shilong/utils'
import { label } from './style.css'

export const Label = (props: React.ComponentProps<'label'>) => {
  const { className, ...reset } = props

  return (
    <label data-slot="sl-label" className={clsx(label, className)} {...reset} />
  )
}
