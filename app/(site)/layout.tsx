import React from 'react'
import { Menu } from '../components/Menu';
import '../globals.css'

interface LoggedLayout {
    children: React.ReactNode;
}

export default function RootLayout ({ children }: LoggedLayout) {
  return (
    <html lang="en">
    <head />
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}
