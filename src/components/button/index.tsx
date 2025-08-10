import { cva, type VariantProps } from '@shilong/utils'
import './style.css'

const getBtnClx = cva({
  base: 'slButtonBase',
  variants: {
    variant: {
      default: 'slButtonVariantDefault',
      destructive: 'slButtonVariantDestructive',
      outline: 'slButtonVariantOutline',
      secondary: 'slButtonVariantSecondary',
      ghost: 'slButtonVariantGhost',
      link: 'slButtonVariantLink',
    },
    size: {
      default: 'slButtonSizeDefault',
      sm: 'slButtonSizeSm',
      lg: 'slButtonSizeLg',
      icon: 'slButtonSizeIcon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type ButtonVariants = VariantProps<typeof getBtnClx>
export type ButtonProps = ButtonVariants & React.ComponentProps<'button'>

export const Button = (props: ButtonProps) => {
  const { className, variant, size, ...reset } = props

  return (
    <button
      data-slot="sl-button"
      className={getBtnClx({ variant, size, className })}
      {...reset}
    />
  )
}
