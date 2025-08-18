import { globalStyle, style } from '@vanilla-extract/css'
import { hsl, hsla, p, px, s, textSm, textXs } from '../theme/utilities'
import { vars } from '../theme/global.css'

export const container = style({
  width: '16rem',
  display: 'flex',
  height: '100svh',
  backgroundColor: hsl(vars['sidebar-background']),
  color: hsl(vars['sidebar-foreground']),
  flexDirection: 'column',

  transition: 'width 0.5s',
})

export const co = style({
  width: 0,
  overflow: 'hidden',
})

export const footer = style({
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: s(2),
  ...p(2),
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: s(2),
  flex: 1,
  overflow: 'auto',
})

export const group = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  ...p(2),
})

export const groupTitle = style({
  color: hsla(vars['sidebar-foreground'], 70),
  // ring-sidebar-ring
  display: 'flex',
  height: s(8),
  flexShrink: 0,
  alignItems: 'center',
  borderRadius: s(2),
  ...px(2),
  ...textXs,
  fontWeight: 500,
  outline: 'hidden',
  //   " flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
  // "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
})

export const menuItem = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: s(2),
  overflow: 'hidden',
  borderRadius: s(2),
  ...p(2),
  textAlign: 'left',
  ...textSm,
  outline: 'hidden',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: hsl(vars['sidebar-accent']),
    color: hsl(vars['sidebar-accent-foreground']),
  },
  ':active': {
    backgroundColor: hsl(vars['sidebar-accent']),
    color: hsl(vars['sidebar-accent-foreground']),
  },
  // "peer/menu-button ring-sidebar-ring   data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground
  //transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
})

export const menuItemActive = style({
  backgroundColor: hsl(vars['sidebar-accent']),
  color: hsl(vars['sidebar-accent-foreground']),
})

export const menuItemWithIcon = style([
  menuItem,
  {
    justifyContent: 'space-between',
  },
])

export const inline = style({
  display: 'flex',
  alignItems: 'center',
  gap: s(2),
})

globalStyle(`:where(${menuItem} svg)`, {
  width: s(4),
  height: s(4),
})

export const menu = style({
  ...textSm,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: s(1),
  position: 'relative',
})

export const menuCollapsible = style({
  width: 'auto',
  marginLeft: s(4.5),
  marginRight: s(4.5),
  ...px(2),
  paddingTop: s(2),
  // height: '100%',
  // backgroundColor: hsl(vars['sidebar-border']),

  ':after': {
    position: 'absolute',
    content: '',
    left: 0,
    bottom: 0,
    width: 1,
    height: '100%',
    backgroundColor: hsl(vars['sidebar-border']),
  },
})

export const menuCol = style({
  // transform: 'scaleY(0)',
  // overflow: 'hidden',
  // maxHeight: 0,
  // height: 0,
  gap: s(3),
})

export const colIcon = style({
  transitionProperty: 'rotate',
  transition: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',

  // transition-transform group-data-[state=open]/collapsible:rotate-90
})

export const colIconCollapsible = style({
  rotate: '90deg',
})

// relative flex w-full min-w-0 flex-col p-2
