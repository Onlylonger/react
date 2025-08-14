import { Button, Checkbox, Input, Label } from '../../src'
import { useState } from 'react'

function App() {
  const [error, setError] = useState(false)
  const [disabled, setDisabled] = useState(false)

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Checkbox aria-invalid={error} disabled={disabled} id="food" />
        <Label htmlFor="food">香蕉</Label>
        <Input placeholder="nihao" />
      </div>
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
