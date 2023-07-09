import Image from 'next/image'

export const TrainerScreen = () => {
  return (
    <main className="bg-secondary flex flex-col gap-8">
        <header className="flex justify-between p-6">
            <div className="greetings">
                <p className="font-bold text-3xl">Hi Tyler,</p>
                <p className="font-semibold text-xl">Monday 12, December</p>
            </div>
            <Image className="rounded-full" src="https://i.pravatar.cc/300" alt="fortys" width={64} height={64}/>
        </header>

        <section className="resume flex justify-between bg-primary text-secondary px-6 py-8 text-lg">
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold">64</p>
                <p>Members</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-bold">$14.000</p>
                <p>Aprox Income</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-bold">+25%</p>
                <p>Last Month</p>
            </div>
        </section>

        <section className="chart p-6">
            <p className="text-3xl font-bold">Your Clients</p>
            <div className="border w-full h-96 mx-auto">
                <table className="table-auto text-center w-full">
                    <thead className='w-full'>
                        <tr>
                            <th >Member</th>
                            <th >Status</th>
                            <th >Progress</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr>
                            <td>Thiago</td>
                            <td>Paid</td>
                            <td>-</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
  )
}
