import { AsideProvider, Aside, AsidebarTrigger, Button } from '@shilong/react'
import { Calendar, Group, Home, KeyRound, Search, User } from 'lucide-react'
import { useState } from 'react'

const items = [
  {
    groupTitle: 'User',
    menusList: [
      {
        title: 'Home',
        url: '/',
        icon: Home,
        key: 'home',
      },
      {
        title: 'User',
        url: '/user',
        icon: User,
        key: 'user',
      },
      {
        title: 'Group',
        icon: Group,
        children: [
          {
            title: 'Item1',
            url: '/item1',
            icon: Calendar,
            key: 'item1',
          },
          {
            title: 'Item2',
            url: '/item2',
            icon: Search,
            key: 'item2',
          },
        ],
      },
      {
        title: 'Role',
        url: '/role',
        icon: KeyRound,
        key: 'role',
      },
    ],
  },
]

function App() {
  const [routeKey, setRouteKey] = useState('item1')

  return (
    <AsideProvider>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Aside
          activeKey={routeKey}
          defaultList={items}
          onNav={(v) => {
            v.key && setRouteKey(v.key)
          }}
        />
        <div>
          <div>
            <AsidebarTrigger
              render={(val) => (
                <Button variant="outline" onClick={() => val.toggle()}>
                  Toggle
                </Button>
              )}
            />
          </div>
          <div>main</div>
        </div>
      </div>
    </AsideProvider>
  )
}

export default App
