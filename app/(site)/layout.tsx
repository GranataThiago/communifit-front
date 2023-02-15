import React from 'react'
import { Menu } from './components/Menu';
import '../globals.css'
import { UserProvider } from '../../context/UserContext';
interface LoggedLayout {
    children: React.ReactNode;
}

export default function RootLayout ({ children }: LoggedLayout) {
  return (
    <html lang="en">
    <head />
      <body>
        <UserProvider>
          <Menu />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
