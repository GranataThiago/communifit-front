import React from 'react'
import { ICommunities } from '../../../../interfaces';
import { getListedCommunities } from '../../../../services/community/communities';
import { CommunityCard } from '../components/CommunityCard';
import { Message } from '../../chat/components';

const RecommendedCommunities = async({token}: {token: string}) => {
  const listCommunities: ICommunities[] | null = await getListedCommunities(token);
  return (
    listCommunities ? (
        <div className="grid grid-cols-1 gap-6">
          {listCommunities.map((community: ICommunities) => (
            <CommunityCard key={community.name} {...community} />
          ))}
        </div>
      ) : (
        <div className="w-100 mt-6">
          <Message
            message="Looks like there are no communities here..."
            sender={false}
          />
        </div>
      )
  )
}

export default RecommendedCommunities