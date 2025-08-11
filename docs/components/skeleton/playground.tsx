import { Skeleton } from '@shilong/react'

function App() {
  return (
    <div>
      <Skeleton
        style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto' }}
      />
      <Skeleton style={{ width: '100%', height: 200 }} />
    </div>
  )
}

export default App
