import { style } from '@vanilla-extract/css'
import { hsl, px, py, s, textSm } from '../theme/utilities'
import { vars } from '../theme/global.css'

export const card = style({
  backgroundColor: hsl(vars.card),
  color: hsl(vars['card-foreground']),
  display: 'flex',
  flexDirection: 'column',
  gap: s(6),
  borderRadius: s(2.5),
  borderStyle: 'solid',
  borderWidth: 1,
  ...py(6),
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
})

export const cardHeader = style({
  display: 'grid',
  gridAutoRows: 'min-content',
  gridTemplateRows: 'auto',
  alignItems: 'flex-start',
  gap: s(1.5),
  ...px(6),

  // has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6;
})

export const cardHeaderTitle = style({
  lineHeight: 1,
  fontWeight: 600,
})

export const cardHeaderDesc = style({
  color: hsl(vars['muted-foreground']),
  ...textSm,
})

export const cardAction = style({
  gridColumnStart: 2,
  // grid-row: span 2 / span 2;
  gridRow: 'span 2 / span 2',
  gridRowStart: 1,
  alignSelf: 'flex-start',
  justifySelf: 'flex-end',
})

export const cardContent = style({
  ...px(6),
})

export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  ...px(6),
  //  [.border-t]:pt-6;
})
