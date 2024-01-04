import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const userData = cookieStore.get('user') && cookieStore.get('user')?.value?JSON.parse(cookieStore.get('user')!.value):null
  return userData.type === 'trainer'?redirect('/trainer'):redirect('/member')
}
