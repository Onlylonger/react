import { Button } from '@shilong/react'
import React from 'react'

function App() {
  const [variant] = React.useState()
  const [size] = React.useState()

  return (
    <Button variant={variant} size={size} onClick={() => alert('Ooops')}>
      Click Me!
    </Button>
  )
}

export default App
