import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../theme/global.css'
import {
  boxShadow,
  boxShadowXs,
  hsl,
  hsla,
  px,
  py,
  s,
  textSm,
} from '../theme/utilities'

export const base = style({
  display: 'inline-flex',
  flexShrink: 0,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  gap: s(2),
  borderRadius: s(2),
  ...textSm,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  transition: 'all',
  outlineStyle: 'none',

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  ':focus-visible': {
    borderColor: hsl(vars.ring),
    boxShadow: boxShadow(3, vars.ring, 50),
  },

  selectors: {
    '&[aria-invalid="true"]': {
      borderColor: hsl(vars.destructive),
      boxShadow: boxShadow(3, vars.destructive, 20),
    },
    '.dark &[aria-invalid="true"]': {
      boxShadow: boxShadow(3, vars.destructive, 40),
    },
  },
})

globalStyle(`:where(${base} > svg)`, {
  pointerEvents: 'none',
  flexShrink: 0,
  width: s(4),
  height: s(4),
})

const vDefault = style({
  backgroundColor: hsl(vars.primary),
  color: hsl(vars['primary-foreground']),
  boxShadow: boxShadowXs(),

  ':hover': {
    backgroundColor: hsla(vars.primary, 90),
  },
})

const vDestructive = style({
  backgroundColor: hsl(vars.destructive),
  color: 'white',
  boxShadow: boxShadowXs(),

  ':hover': {
    backgroundColor: hsla(vars.destructive, 90),
  },
  ':focus-visible': {
    boxShadow: boxShadow(3, vars.destructive, 20),
  },

  selectors: {
    '.dark &': {
      backgroundColor: hsla(vars.destructive, 60),
    },
    '.dark &:focus-visible': {
      boxShadow: boxShadow(3, vars.destructive, 40),
    },
  },
})

const vOutline = style({
  backgroundColor: hsl(vars.background),
  borderWidth: 1,
  borderStyle: 'solid',
  boxShadow: boxShadowXs(),

  ':hover': {
    backgroundColor: hsl(vars.accent),
    color: hsl(vars['accent-foreground']),
  },

  selectors: {
    '.dark &': {
      backgroundColor: hsla(vars.input, 30),
      borderColor: hsl(vars.input),
    },
    '.dark &:hover': {
      backgroundColor: hsla(vars.input, 50),
    },
  },
})

const vSecondary = style({
  backgroundColor: hsl(vars.secondary),
  color: hsl(vars['secondary-foreground']),
  boxShadow: boxShadowXs(),

  ':hover': {
    backgroundColor: hsla(vars.secondary, 80),
  },
})

const vGhost = style({
  ':hover': {
    backgroundColor: hsl(vars.accent),
    color: hsl(vars['accent-foreground']),
  },

  selectors: {
    '.dark &:hover': {
      backgroundColor: hsla(vars.accent, 50),
    },
  },
})

const vLink = style({
  color: hsl(vars.primary),
  textUnderlineOffset: 4,

  ':hover': {
    textDecoration: 'underline',
  },
})

const sDefault = style({
  height: s(9),
  ...px(4),
  ...py(2),

  selectors: {
    '&:has(> svg)': {
      ...px(3),
    },
  },
})

const sSm = style({
  height: s(8),
  ...px(3),
  gap: s(1.5),

  selectors: {
    '&:has(> svg)': {
      ...px(2.5),
    },
  },
})

const sLg = style({
  height: s(10),
  ...px(6),
  gap: s(1.5),
  selectors: {
    '&:has(> svg)': {
      ...px(4),
    },
  },
})

const sIcon = style({
  height: s(9),
  width: s(9),
})

export const variants = styleVariants({
  default: [vDefault],
  destructive: [vDestructive],
  outline: [vOutline],
  secondary: [vSecondary],
  ghost: [vGhost],
  link: [vLink],
})

export const sizes = styleVariants({
  default: [sDefault],
  sm: [sSm],
  lg: [sLg],
  icon: [sIcon],
})
