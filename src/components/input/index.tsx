import { clsx } from '@shilong/utils'
import * as React from 'react'
import './style.css'

export function Input(props: React.ComponentProps<'input'>) {
  const { className, ...reset } = props

  return (
    <input
      data-slot="sl-input"
      className={clsx('slInput', className)}
      {...reset}
    />
  )
}
