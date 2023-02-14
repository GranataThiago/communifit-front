import React from 'react'
import { CommunityScreen, NonCommunityScreen } from './components/screens'

const HARDCODED_COMMUNITY = null;

export default function CommunityPage() {
  return (
    <>
      {
        HARDCODED_COMMUNITY
        ? <CommunityScreen/>
        : <NonCommunityScreen />
      }
    </>
    
  )
}
