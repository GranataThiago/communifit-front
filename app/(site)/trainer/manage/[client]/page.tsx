import React from "react";
import { PlanScreen } from "../../../components/screens";
import PlanProvider from "../../../../../context/CreatePlanContext/PlanProvider";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../../../helpers";
import { redirect } from "next/navigation";

export default  async function CreatePlanPage({params, searchParams}: any) {
  const cookieStore = cookies();
  const user = await getAuthenticatedUser(cookieStore.get('token')!.value);
  if(!user || user?.type !== 'trainer') redirect('/');
  const { client } = params; 

  return (
    <PlanProvider>
      <PlanScreen user={user} client={client} />
    </PlanProvider>
  );
}
