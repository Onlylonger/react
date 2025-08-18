import { clsx } from '@shilong/utils'
import { Label } from '../label'
import { cloneElement, useId } from 'react'
import { useForm } from '../form'
import { Controller } from 'react-hook-form'
import {
  item,
  itemError,
  itemLabel,
  itemValue,
  itemVertical,
} from './style.css'

export type FormItemProps = {
  className?: string
  labelClassName?: string
  label?: string
  name: string
  rules?: any
  render: React.ReactElement
  controlled?: boolean
  vertical?: boolean
}

export const FormItem = (props: FormItemProps) => {
  const {
    className,
    labelClassName,
    label,
    render,
    name,
    rules,
    controlled = false,
    vertical = false,
  } = props

  const { register, errors, control } = useForm()

  const id = useId()

  return (
    <div
      className={clsx(item, className, {
        [itemVertical]: vertical,
      })}
    >
      <Label
        className={clsx(itemLabel, labelClassName)}
        htmlFor={controlled ? undefined : id}
      >
        {label}
      </Label>
      {controlled ? (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <div className={itemValue}>
              {cloneElement<any>(render, {
                ...field,
                'aria-invalid': !!fieldState.error,
              })}
              {fieldState.error && (
                <p className={itemError}>{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
      ) : (
        <div className={itemValue}>
          {cloneElement<any>(render, {
            ...register(name, rules),
            id,
            'aria-invalid': !!errors[name],
          })}
          {errors[name] && (
            <p className={itemError}>{errors[name].message as string}</p>
          )}
        </div>
      )}{' '}
    </div>
  )
}
