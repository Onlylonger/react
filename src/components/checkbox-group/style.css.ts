import { style } from '@vanilla-extract/css'
import { s } from '../theme/utilities'

export const checkboxGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: s(3),
})
