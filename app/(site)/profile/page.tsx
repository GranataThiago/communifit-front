import React from "react";
import { ProfileHeading } from "./components/ProfileHeading";
import { poppins } from "../../components";

export default function ProfilePage() {
  return (
    <div data-testid="content" className="bg-secondary-dark p-6 min-h-screen">
      <ProfileHeading />

      <section className="text-surface-light">
        <h2 className={`font-bold ${poppins.className} text-2xl mb-2`}>Achievements</h2>
        <div className="bg-secondary-light p-6 rounded-xl">
          <p className={`font-bold ${poppins.className} text-lg`}>Disciplined Lifter</p>
          <p className="text-surface-dark">You've completed all your monthly workouts</p>
          <progress className="mt-4 h-16 w-full [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-webkit-progress-bar]:bg-secondary-dark [&::-webkit-progress-value]:bg-primary" max={12} value={4}> 4/12 </progress>
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
    </div>
  );
}
