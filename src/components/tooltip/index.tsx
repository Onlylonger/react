import { clsx } from '@shilong/utils'
import { Popover, type PopoverProps } from '../popover'
import type { PropsWithChildren } from 'react'
import './style.css'

export type TooltipProps = Omit<
  PopoverProps,
  'floatingArrowProps' | 'offsetHeight' | 'children'
> & {
  className?: string
}

export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const { children, className, ...reset } = props

  return (
    <Popover
      {...reset}
      offsetHeight={5}
      floatingArrowProps={{ className: 'slTooltipArrow' }}
    >
      <div className={clsx('slTooltip', className)}>{children}</div>
    </Popover>
  )
}
