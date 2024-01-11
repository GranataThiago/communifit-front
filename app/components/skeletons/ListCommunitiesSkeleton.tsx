import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ListCommunitiesSkeleton = async() => {
  return (
    <div className='flex flex-col gap-3'>
        {
            [...Array(5)].map((_, i)  => {
                return (
                    <div className='h-[112px] min-w-64 text-white flex relative bg-secondary-dark contrast-125 gap-4 transition-colors p-4 rounded-xl'>
            <div>
                <Skeleton className='animation-pulse bg-secondary-light w-20 h-20 rounded-full' />
            </div>
            <div className='flex flex-col gap-2'>
                <Skeleton  className='animation-pulse bg-secondary-light w-32 h-20'/>
                <Skeleton className='animation-pulse bg-secondary-light w-32 h-20'/>
                <Skeleton  className='animation-pulse bg-secondary-light w-32 h-20'/>
            </div>
        </div>
                )
            })
        }
    </div>
  )
}

export default ListCommunitiesSkeleton