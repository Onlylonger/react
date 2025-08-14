import { clsx } from '@shilong/utils'
import { Checkbox, type CheckboxProps } from '../checkbox'
import { Label } from '../label'
import type { AriaAttributes } from 'react'
import { checkboxGroup } from './style.css'

export interface CheckboxGroupProps {
  options: ({
    label: string
    value: string
  } & CheckboxProps)[]
  value?: string[]
  onChange?: (value: CheckboxGroupProps['value']) => void
  className?: string
  'aria-invalid'?: AriaAttributes['aria-invalid']
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { options, value = [], onChange, className, ...reset } = props

  // 处理单个复选框变化
  const handleChange = (optionValue: string, checked: string | boolean) => {
    const newValue = checked
      ? [...value, optionValue] // 添加选中项
      : value.filter((v) => v !== optionValue) // 移除取消项

    onChange?.(newValue)
  }

  return (
    <div className={clsx(checkboxGroup, className)}>
      {options.map((option) => {
        const { label, ...other } = option

        return (
          <Label key={option.value} aria-invalid={reset['aria-invalid']}>
            <Checkbox
              aria-invalid={reset['aria-invalid']}
              {...other}
              checked={value.includes(option.value)}
              onCheckedChange={(v) => {
                other?.onCheckedChange?.(v)
                handleChange(option.value, v)
              }}
            />
            {option.label}
          </Label>
        )
      })}
    </div>
  )
}
