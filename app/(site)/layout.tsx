import React from 'react'
import { Menu } from './components/Menu';
interface LoggedLayout {
    children: React.ReactNode;
}

export default function RootLayout ({ children }: LoggedLayout) {
  return (<>
      <Menu />
      {children}
    </>
  )
}
