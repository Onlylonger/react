import { clsx } from '@shilong/utils'
import type { ComponentProps } from 'react'
import { base } from './styles.css'

export const ResetButton = (props: ComponentProps<'button'>) => {
  const { className, ...reset } = props

  return <button className={clsx(base, className)} {...reset} />
}
