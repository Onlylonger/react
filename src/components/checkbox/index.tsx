'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { clsx } from '@shilong/utils'
import './style.css'

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="sl-checkbox"
      className={clsx('slCheckbox', className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="sl-checkbox-indicator"
        className="slCheckboxIndicator"
      >
        <CheckIcon className="slCheckboxIndicatorIcon" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
