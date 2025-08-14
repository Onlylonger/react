import { clsx } from '@shilong/utils'
import { type PropsWithChildren } from 'react'
import {
  useForm as useReackHookForm,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form'
import { formContext } from './context'

export type FormProps = {
  hookFormOptions?: any
  onSubmit: SubmitHandler<FieldValues>
} & React.ComponentProps<'form'>

export const Form = (props: PropsWithChildren<FormProps>) => {
  const { hookFormOptions, children, onSubmit, className, ...reset } = props
  const methods = useReackHookForm(hookFormOptions)

  const { handleSubmit } = methods

  return (
    <formContext.Provider
      value={{
        register: methods.register,
        formState: methods.formState,
        errors: methods.formState.errors,
        control: methods.control,
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx('slForm', className)}
        {...reset}
      >
        {children}
      </form>
    </formContext.Provider>
  )
}

export { useForm } from './context'
