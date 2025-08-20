import { clsx } from '@shilong/utils'
import { ResetButton } from '../button/ResetButton'
import * as styles from './styles.css'
import { useState } from 'react'
import { X } from 'lucide-react'
import type { TabsProps } from './type'

const Tabs = (props: TabsProps) => {
  const { list, value, onChange, closable = false } = props

  const [ownValue, setOwnValue] = useState(list[0].value)

  const finalValue = value ?? ownValue

  return (
    <div className={styles.container}>
      {list.map((tab) => (
        <ResetButton
          key={tab.value}
          className={clsx(
            styles.button,
            finalValue === tab.value && styles.buttonActive,
          )}
          disabled={tab.disabled}
          onClick={() => {
            setOwnValue(tab.value)
            onChange?.('select', tab)
          }}
        >
          {tab.label}
          {closable && (
            <X
              className={styles.icon}
              onClick={(e) => {
                e.stopPropagation()
                onChange?.('close', tab)
              }}
            />
          )}
        </ResetButton>
      ))}
    </div>
  )
}

export { Tabs }
