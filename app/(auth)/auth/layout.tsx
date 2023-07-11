"use client"

import Head from 'next/head'
import { useRouter } from 'next/navigation';
import { useUserContext } from '../../../context/UserContext';
import { useEffect } from 'react';


export const metadata = {
  title: 'Communifit',
  description: 'bla bla',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg',
      sizes: '64x64',
      url: '/app/icon.svg',
    },
    
  ],
  
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const router = useRouter();
    const { token, user } = useUserContext();

    if (token) {
        router.replace('/');
    }

    return (
        <>
        <Head>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="We provide professional on and off page SEO and Web Design services. We also help companies with their advertising campaigns ensuring their money is not wasted." name="description"/>
            <meta name="robots" content="index,follow"/>
        </Head>
                {children}
        </>
    )
}