import { style } from '@vanilla-extract/css'
import {
  boxShadow,
  hsl,
  hsla,
  px,
  py,
  s,
  textBase,
  textSm,
} from '../theme/utilities'
import { vars } from '../theme/global.css'

export const input = style({
  borderColor: hsl(vars.input),
  display: 'flex',
  height: s(9),
  width: '100%',
  minWidth: 0,
  borderRadius: s(2.5),
  borderStyle: 'solid',
  borderWidth: 1,
  backgroundColor: 'transparent',
  ...px(3),
  ...py(1),
  ...textBase,
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  // transition-[color,box-shadow]
  transitionProperty: 'color,box-shadow',
  outlineStyle: 'none',

  '::file-selector-button': {
    display: 'inline-flex',
    color: hsl(vars.foreground),
    height: s(7),
    borderWidth: 0,
    backgroundColor: 'transparent',
    ...textSm,
    fontWeight: 500,
  },
  '::placeholder': {
    color: hsl(vars['muted-foreground']),
  },
  '::selection': {
    backgroundColor: hsl(vars.primary),
    color: hsl(vars['primary-foreground']),
  },
  ':disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: 50,
  },
  ':focus-visible': {
    borderColor: 'transparent',
    // borderColor: hsl(vars.ring),
    boxShadow: boxShadow(3, vars.ring, 10),
  },
  '@media': {
    '(width >= 48rem /* 768px */)': {
      ...textSm,
    },
  },
  selectors: {
    '&[aria-invalid="true"]': {
      boxShadow: boxShadow(3, vars.destructive, 20),
      borderColor: hsl(vars.destructive),
    },
    '.dark &': {
      // backgroundColor: hsla(vars.input, 30),
      color: hsl(vars.foreground),
      backgroundColor: hsla(vars.foreground, 30),
    },
    '.dark &[aria-invalid="true"]': {
      boxShadow: boxShadow(3, vars.destructive, 40),
    },
  },
})
