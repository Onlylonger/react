import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { clsx } from '@shilong/utils'
import { checkbox, indicator, indicatorIcon } from './style.css'

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="sl-checkbox"
      className={clsx(checkbox, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="sl-checkbox-indicator"
        className={indicator}
      >
        <CheckIcon className={indicatorIcon} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
