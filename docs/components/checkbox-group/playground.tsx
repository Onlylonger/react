import { Button, CheckboxGroup } from '@shilong/react'
import { useState } from 'react'

const options = [
  {
    label: '豆腐',
    value: 'toufu',
  },
  {
    label: '棉花糖',
    value: 'mianhuatang',
  },
  {
    label: '棉花糖2',
    value: 'mianhuatang2',
  },
  {
    label: '棉花糖3',
    value: 'mianhuatang3',
  },
  {
    label: '棉花糖4',
    value: 'mianhuatang4',
  },
]

function App() {
  const [error, setError] = useState(false)
  const [value, setValue] = useState<string[] | undefined>()

  return (
    <>
      <CheckboxGroup
        aria-invalid={error}
        options={options}
        value={value}
        onChange={(v) => setValue(v)}
      />
      <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
        <Button variant="destructive" onClick={() => setError(!error)}>
          Toggle Error
        </Button>
      </div>
    </>
  )
}

export default App
