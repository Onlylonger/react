import { globalStyle, style } from '@vanilla-extract/css'
import { hsl, hsla, p, px, s, textSm } from '../theme/utilities'
import { vars } from '../theme/global.css'

export const container = style({
  position: 'relative',
  width: '100%',
  overflowX: 'auto',
})

export const tableBase = style({
  width: '100%',
  captionSide: 'bottom',
  ...textSm,
})

export const tableHeader = style({})

export const tableBody = style({})

globalStyle(`${tableHeader} tr, ${tableBody} tr`, {
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
})

export const tableFooter = style({
  backgroundColor: hsla(vars.muted, 50),
  // borderBottomStyle: 'solid',
  // borderBottomWidth: 1,
  fontWeight: 500,
})

globalStyle(`${tableFooter} > tr:last-child`, {
  borderBottomWidth: 0,
})

export const tableRow = style({
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  transitionProperty:
    'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',

  ':hover': {
    backgroundColor: hsla(vars.muted, 50),
  },

  selectors: {
    '&[data-state="selected"]': {
      backgroundColor: hsl(vars.muted),
    },
  },
})

export const tableHead = style({
  color: hsl(vars.foreground),
  height: s(10),
  ...px(2),
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: 500,
  whiteSpace: 'nowrap',

  selectors: {
    '&:has([role=checkbox])': {
      paddingRight: 0,
    },
  },
})

globalStyle(`${tableHead} > [role=checkbox]`, {
  translate: '0 2px',
})

export const tableCell = style({
  ...p(2),
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  selectors: {
    '&:has([role=checkbox])': {
      paddingRight: 0,
    },
  },
})

globalStyle(
  `${tableRow} ${tableHead}:last-child,${tableRow} ${tableCell}:last-child`,
  {
    textAlign: 'right',
  },
)

globalStyle(`${tableCell} > [role=checkbox]`, {
  translate: '0 2px',
})

export const tableCaption = style({
  color: hsl(vars['muted-foreground']),
  marginTop: s(4),
  ...textSm,
})

export const tableEmpty = style({
  height: s(24),
  textAlign: 'center',
})
