import React from "react";
import { montserrat } from "../../../../components/fonts";
import { WorkoutActions } from "../../workout/WorkoutActions";
import Workout from "../../workout/Workout";
import { IUser } from "../../../../../interfaces/user";
import MemberInfo from "../../../../components/members/MemberInfo";
import { getMemberByUsername } from "../../../../../services/users/recoverInfo";
import { redirect } from "next/navigation";
import { getClientsByTrainer } from "../../../../../services/trainer/get-clients";

export const PlanScreen = async ({ user, client }: { user: IUser, client: string }) => {
  const foundTrainerClients = await getClientsByTrainer({userId: user?._id!});
  const foundUser = await getMemberByUsername({ username: client });
  const isClientOfTrainer = foundTrainerClients?.clients.filter((c) => c.username === client) || [];
  if (!foundUser || isClientOfTrainer.length===0) redirect('/');


  return (
    <main
      className={`bg-secondary flex flex-col gap-8 text-surface-light ${montserrat.className}`}
      data-testid="main"
    >
      {/*Si o si debería de tener username. Es formulario de registro ... */}
      <MemberInfo fullname={foundUser.fullname} />

      <section className="grid grid-cols-2 grid-rows-1 gap-4 text-white font-bold px-6">
        <div className="bg-primary flex flex-col items-center justify-center py-6 rounded-lg">
          <p className="">18</p>
          <span>years old</span>
        </div>
        <div className="bg-primary  flex flex-col items-center justify-center py-6 rounded-lg">
          <p className="">78kg</p>
          <span>weight</span>
        </div>
        <div className="bg-primary  flex flex-col items-center justify-center py-6 rounded-lg">
          <p className="">Shred</p>
          <span>Objective</span>
        </div>

        <div className="bg-primary  flex flex-col items-center justify-center py-6 rounded-lg">
          <p className="">More</p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="ml-6">
          <p className="font-bold text-3xl">Progress this week</p>
        </div>

        <div className="resume flex justify-between bg-primary text-secondary px-6 py-8 text-lg">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">2000</p>
            <p>kcal average</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">200g</p>
            <p>lost</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">4</p>
            <p>sessions</p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <p className="font-bold text-3xl">Workout</p>
        <Workout />
      </section>

      <footer className="p-6 mb-8">
        <WorkoutActions />
      </footer>
    </main>
  );
};
