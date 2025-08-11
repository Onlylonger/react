import { Button, Tooltip } from '@shilong/react'

function App() {
  return (
    <Tooltip
      trigger={<Button variant="outline">👋</Button>}
      hover
      click={false}
      arrow
    >
      这是一个打招呼的表情
    </Tooltip>
  )
}

export default App
