import Image from 'next/image'
import { UserGreeting } from '../UserGreeting'
import { User } from '../../../../interfaces/user'

const FAKE_USERS = [{
    username: 'thiagog',
    fullName: 'Thiago Granata',
    image: 'none',
    state: 'paid'
}]

export const TrainerScreen = () => {
  return (
    <main className="bg-secondary flex flex-col gap-8">
        <header className="flex flex-col-reverse gap-6 xxs:flex-row  justify-between p-6 relative">
            <UserGreeting/>
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
                        {
                            FAKE_USERS.map(({ username, fullName, image, state }) => (
                                <tr key={username}>
                                    <td>{fullName}</td>
                                    <td>{state}</td>
                                    <td>-</td>
                                    <td>
                                        <a href={`/trainer/create/${username}`}>Edit</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </main>
  )
}
