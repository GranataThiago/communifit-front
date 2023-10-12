import React from 'react'
import { CommunityScreen } from '../components/screens'
import { cookies } from 'next/headers';
import { Community } from '../../../../interfaces/community';
import { redirect } from 'next/navigation';
import apiInstance from '../../../api';
import { getCommunityData, getCommunityPosts } from '../../../../services/community/community-page';

interface CommunityPageParams{
  name: string
}

interface CommunityPageProps{
  params: CommunityPageParams
}

const getCommunity = async(name: string): Promise<Community | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value as string
  
  const communityData = await getCommunityData({ token, name });
  if(!communityData || !communityData.community){
    return null;
  }

  const community = communityData.community;
  const postsData = await getCommunityPosts({ token, name });
  community.posts = postsData?.posts ? postsData.posts : []

  return community;
}


export default async function CommunityPage({ params }: CommunityPageProps) {
  const { name } = params;
  const community: Community | null = await getCommunity(name);

  if(!community)
  {
    redirect("/community")
  }

  return (
        /* @ts-expect-error Server Component */
        <CommunityScreen {...community} />    
  )
}
