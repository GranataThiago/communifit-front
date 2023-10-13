import React from 'react'
import './globals.css'
import { UserProvider } from '../context/UserContext';
interface LoggedLayout {
    children: React.ReactNode;
}

export default function RootLayout ({ children }: LoggedLayout) {
  return (
    <html>
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
