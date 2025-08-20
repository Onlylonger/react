import { style } from '@vanilla-extract/css'
import { boxShadowXs, hsl, p, px, py, s } from '../theme/utilities'
import { vars } from '../theme/global.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: s(2),
  backgroundColor: hsl(vars.muted),
  height: s(9),
  color: hsl(vars['muted-foreground']),
  ...p(1),
  borderRadius: s(2),
})

export const button = style({
  ...py(1),
  ...px(2),
  borderRadius: s(2),
  height: s(7),
  fontWeight: 500,
  // pointerEvents: 'none',
  zIndex: 1,
})

export const buttonActive = style({
  backgroundColor: hsl(vars.background),
  color: hsl(vars.foreground),
  boxShadow: boxShadowXs(),
})

export const icon = style({
  pointerEvents: 'auto',
  ':hover': {
    backgroundColor: hsl(vars.primary),
    color: hsl(vars['primary-foreground']),
    borderRadius: '50%',
  },
})
