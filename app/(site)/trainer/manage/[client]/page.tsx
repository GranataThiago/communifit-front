import React from "react";
import { PlanScreen } from "../../../components/screens";
import PlanProvider from "../../../../../context/CreatePlanContext/PlanProvider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IMinimumUserInfo } from "../../../../../interfaces/user";

export default  async function CreatePlanPage({params, searchParams}: any) {
  const cookieStore = cookies();
  const user: IMinimumUserInfo = JSON.parse(cookieStore.get('user')!.value);
  if(!user || user?.type !== 'trainer') redirect('/');
  const { client } = params; 

  return (
    <PlanProvider>
      <PlanScreen user={user} client={client} />
    </PlanProvider>
  );
}
