import { Loader2Icon } from 'lucide-react'
import type { ButtonProps } from './type'
import { variants, sizes, base } from './styles.css'
import { clsx } from '@shilong/utils'
import { animateSpin } from '../theme/global.css'

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    render,
    variant = 'default',
    size = 'default',
    loading,
    ...reset
  } = props

  const btnCommonProps = {
    'data-slot': 'sl-button',
    className: clsx(base, variants[variant], sizes[size], className),
    children: (
      <>
        {loading && <Loader2Icon className={animateSpin} />}
        {children}
      </>
    ),
  }

  const btnProps = {
    ...btnCommonProps,
    ...reset,
  }

  if (typeof render === 'function') {
    return render(btnProps)
  }

  return <button {...btnProps} />
}

export { Button }
