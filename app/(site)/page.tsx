import { redirect } from "next/navigation";
import { cookieAsJSON } from "../../helpers/cookie";
import { IUser } from "../../interfaces/user";

export default function Page() {
  const userData:IUser = cookieAsJSON('user'); 
  return userData.type === 'trainer'?redirect('/trainer'):redirect('/member')
}
