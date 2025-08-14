import { clsx } from '@shilong/utils'
import { Label } from '../label'
import './style.css'
import { cloneElement, useId } from 'react'
import { useForm } from '../form'
import { Controller } from 'react-hook-form'

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
      className={clsx('slFormItem', className, {
        slFormItemVertical: vertical,
      })}
    >
      <Label
        className={clsx('slFormItemLabel', labelClassName)}
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
            <div className="slFormItemValue">
              {cloneElement<any>(render, {
                ...field,
                'aria-invalid': !!fieldState.error,
              })}
              {fieldState.error && (
                <p className="slFormItemError">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
      ) : (
        <div className="slFormItemValue">
          {cloneElement<any>(render, {
            ...register(name, rules),
            id,
            'aria-invalid': !!errors[name],
          })}
          {errors[name] && (
            <p className="slFormItemError">{errors[name].message as string}</p>
          )}
        </div>
      )}{' '}
    </div>
  )
}
