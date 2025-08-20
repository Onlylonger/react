import { Tabs } from '@shilong/react'

function App() {
  return (
    <Tabs
      list={[
        {
          label: '1111',
          value: '222',
        },
        {
          label: '222',
          value: '33',
        },
      ]}
      onChange={(_, v) => {
        console.log(v)
      }}
    />
  )
}

export default App
