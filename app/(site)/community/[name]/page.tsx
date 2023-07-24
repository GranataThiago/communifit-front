import React from 'react'
import { CommunityScreen, NonCommunityScreen } from '../components/screens'
import { cookies } from 'next/headers';
import { Community } from '../../../../interfaces/community';
import apiInstance from '../../../api';

const getCommunity = async(): Promise<Community> => {
  const cookieStore = cookies();
  const { data: { community } } = await apiInstance.get('/communities/gorillas', { headers: { token: cookieStore.get('token')?.value }});
  const { data, request } = await apiInstance.get('/communities/gorillas/posts?page=1', { headers: { token: cookieStore.get('token')?.value }});
  const { posts, totalPages, totalResults } = data;
  return {
      posts: [
          ...posts
      ],
      image: '',
      name: community.displayname,
      description: community.description
  };
}


export default async function CommunityPage({ params, searchParams }) {

  const community: Community = await getCommunity();

  return (
    <>
      {
        community
        /* @ts-expect-error Server Component */
        ? <CommunityScreen {...community} />
        /* @ts-expect-error Server Component */
        : <NonCommunityScreen />
      }
    </>
    
  )
}