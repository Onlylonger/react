import { Loader2Icon } from 'lucide-react'
import './style.css'
import type { ButtonProps } from './type'
import { getBtnClx } from './style'

const Button = (props: ButtonProps) => {
  const { className, children, render, variant, size, loading, ...reset } =
    props

  const btnCommonProps = {
    'data-slot': 'sl-button',
    className: getBtnClx({ variant, size, className }),
    children: (
      <>
        {loading && <Loader2Icon className="animate-spin" />}
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
