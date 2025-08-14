import { globalStyle, style } from '@vanilla-extract/css'
import { hsl, s, textSm } from '../theme/utilities'
import { vars } from '../theme/global.css'

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: s(2),
  paddingBottom: s(7),
})

export const itemVertical = style({
  flexDirection: 'column',
  alignItems: 'start',
})

export const itemLabel = style({
  display: 'inline-block',
  width: '25%',
  flexShrink: 0,
  textAlign: 'right',
})

export const itemValue = style({
  position: 'relative',
  flex: 1,
})

export const itemError = style({
  color: hsl(vars.destructive),
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: s(0.5),
  marginLeft: s(0.5),
  ...textSm,
})

globalStyle(`${itemVertical} ${itemLabel}`, {
  width: '100%',
  textAlign: 'left',
})

globalStyle(`${itemVertical} ${itemValue}`, {
  width: '100%',
})
