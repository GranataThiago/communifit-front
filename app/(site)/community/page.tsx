import { IMinimumUserInfo } from "../../../interfaces/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CommunityPage = async () => {
	const cookieStore = cookies();

  	const user: IMinimumUserInfo = JSON.parse(cookieStore.get('user')!.value);

	if (!user) return redirect("/");

	return user.type === "trainer"
		? redirect("/community/trainer")
		: user.community?.name
			? redirect("/community/member")
			: redirect(`/community/${user.community?.name}`)

};

export default CommunityPage;
