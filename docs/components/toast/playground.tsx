import { Button, toast, Toaster } from '@shilong/react'
import ReactDom from 'react-dom'

function App() {
  return (
    <>
      <Button onClick={() => toast('nihao')}>Show Toast!</Button>
      {/* createPortal is optional. Use it when your layers are incorrect and cannot be easily modified. */}
      {ReactDom.createPortal(<Toaster position="top-center" />, document.body)}
    </>
  )
}

export default App
