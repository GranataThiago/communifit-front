import React from 'react'
import { CommunityScreen, NonCommunityScreen } from './components/screens'

const HARDCODED_COMMUNITY = 'je';

export default function CommunityPage() {
  return (
    <>
      {
        HARDCODED_COMMUNITY
        ? <CommunityScreen/>
        /* @ts-expect-error Server Component */
        : <NonCommunityScreen />
      }
    </>
    
  )
}
