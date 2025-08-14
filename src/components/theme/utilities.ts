import { calc } from '@vanilla-extract/css-utils'
import { vars } from './global.css'

export const hsla = (name: string, percent: number) =>
  `hsla(${name}/${percent / 100})`

export const hsl = (name: string) => `hsl(${name})`

export const boxShadow = (w: number, name: string, percent: number) =>
  `0 0 #0000, 0 0 #0000,0 0 #0000,0 0 0 ${w}px ${hsla(name, percent)},0 0 #0000`

export const boxShadowXs = () =>
  `0 0 #0000, 0 0 #0000,0 0 #0000,0 0 0 #0000,0 1px 2px 0 #0000000d`

export const px = (n: number) => ({
  paddingLeft: calc.multiply(vars.spacing, n),
  paddingRight: calc.multiply(vars.spacing, n),
})

export const py = (n: number) => ({
  paddingTop: calc.multiply(vars.spacing, n),
  paddingBottom: calc.multiply(vars.spacing, n),
})

export const p = (n: number) => ({
  ...px(n),
  ...py(n),
})

export const s = (n: number) => calc.multiply(vars.spacing, n)

const xsSpacing = calc.multiply(vars.spacing, 3)
const smSpacing = calc.multiply(vars.spacing, 3.5)
const baseSpacing = calc.multiply(vars.spacing, 4)

export const textXs = {
  fontSize: xsSpacing,
  lineHeight: calc(vars.spacing).multiply(4).divide(xsSpacing).toString(),
}

export const textSm = {
  fontSize: smSpacing,
  lineHeight: calc(vars.spacing).multiply(5).divide(smSpacing).toString(),
}

export const textBase = {
  fontSize: baseSpacing,
  lineHeight: calc(vars.spacing).multiply(6).divide(baseSpacing).toString(),
}
