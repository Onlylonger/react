import { style } from '@vanilla-extract/css'
import { hsl, s, textSm } from '../theme/utilities'
import { vars } from '../theme/global.css'

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: s(2),
  ...textSm,
  lineHeight: 1,
  fontWeight: 500,
  userSelect: 'text',

  selectors: {
    '&[aria-invalid="true"]': {
      color: hsl(vars.destructive),
    },
    //  has-disabled:cursor-not-allowed has-disabled:opacity-50;

    '&:has(*:disabled),&[data-disabled="true"]': {
      pointerEvents: 'none',
      opacity: 50,
      cursor: 'not-allowed',
    },
  },
})
