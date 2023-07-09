import React from 'react'
import './globals.css'
import { Menu } from './(site)/components/Menu';
import { UserContext } from '../context/UserContext/UserContext';
import { UserProvider } from '../context/UserContext';
interface LoggedLayout {
    children: React.ReactNode;
}

export default function RootLayout ({ children }: LoggedLayout) {
  return (
    <html>
      <body>
        <UserProvider>
          <Menu />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
