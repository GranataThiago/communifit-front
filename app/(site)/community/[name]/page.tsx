import React from 'react'
import { CommunityScreen } from '../components/screens'
import { cookies } from 'next/headers';
import { Community } from '../../../../interfaces/community';
import apiInstance from '../../../api';
import { redirect } from 'next/navigation';

const getCommunity = async(name: string): Promise<Community | null> => {
  const cookieStore = cookies();
  const { data: { community } } = await apiInstance.get(`/communities/${name}`, { headers: { token: cookieStore.get('token')?.value }});
  const { data, request } = await apiInstance.get(`/communities/${name}/posts?page=1`, { headers: { token: cookieStore.get('token')?.value }});
  const { posts, totalPages, totalResults } = data;

  if(!community) return null;

  return {
      posts: [
          ...posts
      ],
      image: '',
      name: community.displayname,
      displayname: community.displayname,
      description: community.description
  };
}


export default async function CommunityPage({ params }: { params: { name: string } }) {
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
