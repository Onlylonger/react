import { isBrowser } from '@shilong/utils'
import { createRoot } from 'react-dom/client'

export const mount = (component: React.ReactNode, className: string = '') => {
  if (!isBrowser()) return

  const placeholder = document.createElement('div')
  const uuid = crypto.randomUUID()
  placeholder.id = uuid
  placeholder.className = className
  document.body.appendChild(placeholder)

  const root = createRoot(placeholder)

  root.render(component)

  return {
    unmount() {
      root.unmount()
      document.body.removeChild(placeholder)
    },
  }
}

export const createSingleToast = (options: {
  timeout: number
  rootClassNames?: string
}) => {
  const {
    timeout,
    rootClassNames = 'fixed top-5 bg-gray-100 text-sm left-1/2 -translate-x-1/2 py-1 px-2 border border-black rounded-sm animate-fade',
  } = options

  let timer: NodeJS.Timeout | null = null
  let instance: ReturnType<typeof mount> | null = null

  return function (component: React.ReactNode) {
    if (timer) {
      instance?.unmount()
      clearTimeout(timer)
      timer = null
    }

    instance = mount(component, rootClassNames)

    timer = setTimeout(() => {
      instance?.unmount()
      timer = null
    }, timeout)
  }
}

export const openMessageBox = createSingleToast({ timeout: 5000 })
