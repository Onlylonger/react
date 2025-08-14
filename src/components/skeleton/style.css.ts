import { style } from '@vanilla-extract/css'
import { hsl, s } from '../theme/utilities'
import { animatePulse, vars } from '../theme/global.css'

export const skeleton = style([
  animatePulse,
  {
    backgroundColor: hsl(vars.accent),
    borderRadius: s(2.5),
  },
])
