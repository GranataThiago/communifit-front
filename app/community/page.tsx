import React from 'react'
import { CommunityScreen, NonCommunityScreen } from '../../components/screens'

const HARDCODED_COMMUNITY = null;

const CommunityPage = () => {
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

export default CommunityPage