import { clsx } from '@shilong/utils'
import * as React from 'react'
import './style.css'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="sl-card" className={clsx('slCard', className)} {...props} />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-header"
      className={clsx('slCardHeader', className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-title"
      className={clsx('slCardTitle', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-description"
      className={clsx('slCardDescription', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-action"
      className={clsx('slCardAction', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-content"
      className={clsx('slCardContent', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-footer"
      className={clsx('slCardFooter', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
