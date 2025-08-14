import { clsx } from '@shilong/utils'
import './style.css'
import { skeleton } from './style.css'

export function Skeleton(props: React.ComponentProps<'div'>) {
  const { className, ...reset } = props

  return (
    <div
      data-slot="sl-skeleton"
      className={clsx(skeleton, className)}
      {...reset}
    />
  )
}
