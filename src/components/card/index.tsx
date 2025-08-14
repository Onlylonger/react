import { clsx } from '@shilong/utils'
import * as React from 'react'
import {
  card,
  cardAction,
  cardContent,
  cardFooter,
  cardHeader,
  cardHeaderTitle,
} from './style.css'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="sl-card" className={clsx(card, className)} {...props} />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-header"
      className={clsx(cardHeader, className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-title"
      className={clsx(cardHeaderTitle, className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-description"
      className={clsx(CardDescription, className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-action"
      className={clsx(cardAction, className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-content"
      className={clsx(cardContent, className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sl-card-footer"
      className={clsx(cardFooter, className)}
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
