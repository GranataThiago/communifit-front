import React from "react";
import { ProfileHeading } from "./components/ProfileHeading";
import { poppins } from "../../components";
import Progress from "../../components/ui/progress";
import LogoutButton from "./components/LogoutButton";
import { getAuthenticatedUser } from "../../../helpers";
import { cookies } from "next/headers";

export default async function ProfilePage() {

  const user = await getAuthenticatedUser(cookies().get('token')!.value);


  return (
    <div data-testid="content" className="bg-secondary-dark p-6 min-h-screen">
      <ProfileHeading user={user}/>

      <section className="text-surface-light">
        <h2 className={`font-bold ${poppins.className} text-2xl mb-2`}>Achievements</h2>
        <div className="bg-secondary-light p-6 rounded-xl">
          <p className={`font-bold ${poppins.className} text-lg`}>Disciplined Lifter</p>
          <p className="text-surface-dark">You've completed all your monthly workouts</p>
          <Progress className="mt-4 h-16 w-full" value={4} maxValue={12} variant="dark" />
        </div>
      </section>

      <section className="text-surface-light mt-6 flex flex-col gap-2">
        <h2 className={`font-bold ${poppins.className} text-2xl`}>Settings</h2>
        <div className="bg-secondary-light rounded-xl p-6 flex-1 flex justify-between">
            <p className="text-xl text-surface-light">Language</p>
            <p>&#62;</p>
        </div>

        <div className="bg-secondary-light rounded-xl p-6 flex-1 flex justify-between">
            <p className="text-xl text-surface-light">Security</p>
            <p>&#62;</p>
          </div>

          <div className="bg-secondary-light rounded-xl p-6 flex-1 flex justify-between">
            <p className="text-xl text-surface-light">Notifications</p>
            <p>&#62;</p>
          </div>
      </section>

      <LogoutButton />
   </div>
  );
}
