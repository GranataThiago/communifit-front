import React from 'react'
import { CommunityScreen, NonCommunityScreen } from './components/screens'

const HARDCODED_COMMUNITY = 'je';

export default function CommunityPage() {
  return (
    <>
      {
        HARDCODED_COMMUNITY
        /* @ts-expect-error Server Component */
        ? <CommunityScreen/>
        /* @ts-expect-error Server Component */
        : <NonCommunityScreen />
      }
    </>
    
  )
}
