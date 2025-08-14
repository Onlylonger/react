import { style } from '@vanilla-extract/css'
import { vars } from '../theme/global.css'
import { hsl, px, py, s, textXs } from '../theme/utilities'

export const tooltip = style({
  backgroundColor: hsl(vars.primary),
  color: hsl(vars['primary-foreground']),
  width: 'fit-content',
  borderRadius: s(1.5),
  ...py(1.5),
  ...px(2),
  ...textXs,
  textWrap: 'balance',

  //   animate-in fade-in-0 zoom-in-95 origin-(--radix-tooltip-content-transform-origin) z-50
  selectors: {
    '&[data-state="closed"]': {
      //data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
    },
    '&[data-side="bottom"]': {
      //data-[side=bottom]:slide-in-from-top-2
    },
    '&[data-side="left"]': {
      //data-[side=left]:slide-in-from-right-2
    },
    '&[data-side="right"]': {
      //data-[side=right]:slide-in-from-left-2
    },
    '&[data-side="top"]': {
      //data-[side=top]:slide-in-from-bottom-2
    },
  },
})

export const arrow = style({
  fill: hsl(vars.primary),
})
