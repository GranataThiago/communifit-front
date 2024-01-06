import React from 'react'
import UserGreeting from '../components/UserGreeting'
import { Button } from '../../components/ui/button';
import { poppins } from '../../components';
import Progress from '../../components/ui/progress';

import WorkoutMember from '../components/workout/WorkoutMember'
//No tipen esto, les va a dar error el build
const MemberPage = async({user}: any) => {

  return (
    <main className="bg-secondary-dark flex flex-col gap-8 p-6" data-testid="work">
      <header className="flex flex-col justify-between items-center w-full">
        <UserGreeting user={user} />
      </header>

      <section className="workout flex flex-col gap-8 bg-secondary-light rounded-xl p-6">
        <h2 className={`${poppins.className} font-bold text-3xl text-surface-light`}>Today's work</h2>
        <div>
          <WorkoutMember user={user} />
        </div>

        <Button>Show Workout</Button>
      </section>

      <section className="w-full flex flex-col gap-4">
        <header className="w-full flex flex-col items-start justify-center gap-4">
          <h2 className={`${poppins.className} font-bold text-xl text-surface-light`}>Monthly Progress</h2>
          <Progress value={4} maxValue={12}></Progress>
        </header>

        <div className="flex gap-4">
          <div className="bg-secondary-light rounded-xl p-6 grid place-items-center flex-1">
            <p className="text-primary font-bold text-xl">46</p>
            <p className="text-surface-light text-lg">total sets</p>
          </div>

          <div className="bg-secondary-light rounded-xl p-6 grid place-items-center flex-1">
            <p className="text-primary font-bold text-xl">3200</p>
            <p className="text-surface-light text-lg">kg moved</p>
          </div>
        </div>

        <Button className="ml-auto w-48" variant='outlined'>View report</Button>
      </section>

      <section className="w-full flex flex-col gap-4">
        <header className="w-full flex flex-col items-start justify-center gap-4">
          <h2 className={`${poppins.className} font-bold text-xl text-surface-light`}>Past Sessions</h2>
        </header>

        <div className="flex flex-col gap-4">
          <div className="bg-secondary-light rounded-xl p-6 flex-1">
          <p className="text-xl text-surface-light"><span className="text-primary font-bold">Session C</span> - 30/12/2023</p>
          </div>

          <div className="bg-secondary-light rounded-xl p-6 grid flex-1">
            <p className="text-xl text-surface-light"><span className="text-primary font-bold">Session B</span> - 28/12/2023</p>
          </div>
        </div>

      </section>  
    </main>
  )
}

export default MemberPage
