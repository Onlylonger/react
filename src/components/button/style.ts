import { cva } from '@shilong/utils'

export const getBtnClx = cva({
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
