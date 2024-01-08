
import Link from 'next/link'
import React from 'react'
import { poppins } from '../../../components'

const RestDay = () => {
  return (
    <div>
        <p className={`${poppins.className} text-primary text-3xl font-bold flex justify-between`}>
            Today is rest day!
        </p>
        <p className='text-surface-light text-xl mt-2'>Anyways, we suggest you to maintain
            an active rest! Read more <Link href=''>here</Link></p>
    </div>
  )
}

export default RestDay