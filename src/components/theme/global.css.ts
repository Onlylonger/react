import {
  createGlobalThemeContract,
  globalKeyframes,
  style,
} from '@vanilla-extract/css'

const varsKey = [
  'spacing',
  'radius',
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'border',
  'input',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
  'sidebar',
  'sidebar-foreground',
  'sidebar-primary',
  'sidebar-primary-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring',
] as const

type Item = (typeof varsKey)[number]

export const vars = createGlobalThemeContract(
  varsKey.reduce(
    (acc, str) => {
      acc[str] = str
      return acc
    },
    {} as Record<Item, Item>,
  ),
  (name) => `sl-${name}`,
) as { [K in Item]: `var(--sl-${K})` }

const keyframeSpin = 'slSpin'
const keyframePulse = 'slPulse'

globalKeyframes(keyframeSpin, {
  to: {
    transform: 'rotate(360deg)',
  },
})

globalKeyframes(keyframePulse, {
  '50%': {
    opacity: 0.5,
  },
})

export const animateSpin = style({
  animation: `${keyframeSpin} 1s linear infinite`,
})
export const animatePulse = style({
  animation: `${keyframePulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})
