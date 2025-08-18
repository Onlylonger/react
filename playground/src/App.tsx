import { Calendar, Group, Home, KeyRound, Search, User } from 'lucide-react'
import { Aside, AsidebarTrigger, useAside } from '../../src/components/aside'
import { AsideProvider } from '../../src/components/aside/context'

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
        key: 'group',
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

export default function App() {
  const [menus, setMeuns] = useState(items)

  return (
    <div style={{ display: 'flex' }}>
      <AsideProvider>
        <Aside
          activeKey="item1"
          defaultList={menus}
          onNav={(v) => {
            console.log(v)
          }}
        />

        <div>
          <div>header</div>
          <div>
            <AsidebarTrigger
              render={(val) => <span onClick={() => val.toggle()}>nihao</span>}
            />
          </div>
        </div>
      </AsideProvider>
    </div>
  )
}
