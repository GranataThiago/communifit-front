import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../helpers/";
import TrainerPage from "./trainer/page";
import MemberPage from "./member/page";

export default async function Page() {
  const cookieStore = cookies();
  const user = await getAuthenticatedUser(cookieStore.get('token')!.value);
  return user ? (user.type === 'trainer' ? <TrainerPage user={user} />:<MemberPage user={user}/>) : redirect('/auth/login')
}
