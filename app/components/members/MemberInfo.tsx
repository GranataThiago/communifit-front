import Image from 'next/image'
import React from 'react'

const MemberInfo = async ({fullname}: {fullname: string}) => {
    return (
        <header className="flex justify-between p-6">
            <div className="greetings">
                <p className="font-bold text-3xl">Client Plan</p>
                <p className="font-semibold text-xl"> {fullname} </p>
            </div>
            <Image
                className="rounded-full"
                src="https://i.pravatar.cc/300"
                alt="fortys"
                width={64}
                height={64}
            />
        </header>
    )
}

export default MemberInfo