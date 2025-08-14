import { style } from '@vanilla-extract/css'
import { vars } from '../theme/global.css'
import { boxShadow, hsl, hsla, s } from '../theme/utilities'

export const checkbox = style({
  borderColor: hsl(vars.input),
  borderWidth: 1,
  width: s(4),
  height: s(4),
  flexShrink: 0,
  borderRadius: 4,
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  transitionProperty: 'box-shadow',
  outlineStyle: 'none',

  // transition-shadow

  ':focus-visible': {
    borderColor: hsl(vars.ring),
    boxShadow: boxShadow(3, vars.ring, 50),
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 50,
  },

  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: hsl(vars.primary),
      color: hsl(vars['primary-foreground']),
    },
    '&[aria-invalid="true"]': {
      borderColor: hsl(vars.destructive),
      boxShadow: boxShadow(3, vars.destructive, 20),
    },

    '.dark &': {
      backgroundColor: hsla(vars.foreground, 50),
      //   backgroundColor: hsla(vars.input, 30),
    },
    '.dark &[data-state="checked"]': {
      backgroundColor: hsl(vars.primary),
      borderColor: hsl(vars.primary),
    },
    '.dark &[aria-invalid="true"]': {
      boxShadow: boxShadow(3, vars.destructive, 40),
      borderColor: hsl(vars.destructive),
    },
  },
})

export const indicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'currentcolor',
  transition: 'none',
})

export const indicatorIcon = style({
  width: s(3.5),
  height: s(3.5),
})
