import { Activity, Button, Input } from '@shilong/react'
import React from 'react'

const Home = () => {
  return 'Home'
}

const SearchList = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Input />
      <Button>Search</Button>
    </div>
  )
}

function App() {
  const [route, setRoute] = React.useState('home')

  const handleNav = (path: string) => {
    setRoute(path)
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button variant="ghost" onClick={() => handleNav('home')}>
          Home
        </Button>
        <Button variant="ghost" onClick={() => handleNav('search')}>
          Search List
        </Button>
      </div>

      <Activity mode={route === 'home' ? 'visible' : 'hidden'}>
        <Home />
      </Activity>

      <Activity mode={route === 'search' ? 'visible' : 'hidden'}>
        <SearchList />
      </Activity>
    </div>
  )
}

export default App
