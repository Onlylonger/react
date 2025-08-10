import { clsx } from '@shilong/utils'
import './style.css'

export function Skeleton(props: React.ComponentProps<'div'>) {
  const { className, ...reset } = props

  return (
    <div
      data-slot="sl-skeleton"
      className={clsx('slSkeleton', className)}
      {...reset}
    />
  )
}
