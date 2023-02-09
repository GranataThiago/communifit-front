import React from 'react'
import { CommunityScreen, NonCommunityScreen } from '../../components/screens'

const HARDCODED_COMMUNITY = 'gorillas';

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