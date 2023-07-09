import React from 'react'
import './globals.css'
import { Menu } from './(site)/components/Menu';
interface LoggedLayout {
    children: React.ReactNode;
}

export default function RootLayout ({ children }: LoggedLayout) {
  return (
    <html>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}
