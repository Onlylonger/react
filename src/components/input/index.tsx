import { clsx } from '@shilong/utils'
import * as React from 'react'
import { input } from './style.css'

export function Input(props: React.ComponentProps<'input'>) {
  const { className, ...reset } = props

  return (
    <input data-slot="sl-input" className={clsx(input, className)} {...reset} />
  )
}
