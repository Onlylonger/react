import { createContext, useContext } from 'react'
import { type UseFormReturn } from 'react-hook-form'

type FormState = UseFormReturn['formState']

export const formContext = createContext<
  | (Pick<UseFormReturn, 'register' | 'formState' | 'control'> & {
      errors: FormState['errors']
    })
  | null
>(null)

export const useForm = () => {
  const val = useContext(formContext)
  if (!val) {
    throw new Error('useForm only work in Form component')
  }
  return val
}
