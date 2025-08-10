import { Button, Popover } from '@shilong/react'

function App() {
  return (
    <Popover trigger={<Button variant="outline">Click && Hover</Button>} hover>
      <div style={{ border: '1px solid black' }}>nihao</div>
    </Popover>
  )
}

export default App
