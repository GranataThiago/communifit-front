import React from 'react'
import '../globals.css'

interface AuthLayout {
    children: React.ReactNode;
}


export default function RootLayout ({ children }: AuthLayout) {
  return (
    <html lang="en">
    <head />
      <body>
        {children}
      </body>
    </html>
  )
}
