import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import TrainerPage from "./trainer/page";
import MemberPage from "./member/page";
import { IMinimumUserInfo } from "../../interfaces/user";

export default async function Page() {
  const cookieStore = cookies();
  const user: IMinimumUserInfo = JSON.parse(cookieStore.get('user')!.value);
  return user ? (user.type === 'trainer' ? <TrainerPage user={user} />:<MemberPage user={user}/>) : redirect('/auth/login')
}
