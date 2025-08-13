import { Button, Checkbox } from '@shilong/react'
import { useState } from 'react'

function App() {
  const [error, setError] = useState(false)
  const [disabled, setDisabled] = useState(false)

  return (
    <>
      <Checkbox aria-invalid={error} disabled={disabled} />
      <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
        <Button variant="destructive" onClick={() => setError(!error)}>
          Toggle Error
        </Button>
        <Button onClick={() => setDisabled(!disabled)}>Toggle disabled</Button>
      </div>
    </>
  )
}

export default App
