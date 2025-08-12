import { clsx } from '@shilong/utils'
import './style.css'

export const Label = (props: React.ComponentProps<'label'>) => {
  const { className, ...reset } = props

  return (
    <label
      data-slot="sl-label"
      className={clsx('slLabel', className)}
      {...reset}
    />
  )
}
