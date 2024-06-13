import type { ComponentType, JSX } from 'react'

import Home from '@/pages/Home/Home'
import Tasks from '@/pages/Tasks/Tasks'
import Friends from '@/pages/Friends/Friends'
import Game from '@/pages/Game/Game'

interface Route {
  path: string
  Component: ComponentType
  title?: string
  icon?: JSX.Element
}

export const routes: Route[] = [
  { path: '/', Component: Home },
  { path: '/tasks', Component: Tasks },
  { path: '/friends', Component: Friends },
  { path: '/game', Component: Game}
]
