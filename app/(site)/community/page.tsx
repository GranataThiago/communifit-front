import { IMinimumUserInfo } from "../../../interfaces/user";
import { NonCommunityMemberScreen } from "./components/screens";
import { cookies } from "next/headers";
import { getAuthenticatedUser } from "../../../helpers";
import { redirect } from "next/navigation";

const CommunityPage = async () => {
	const cookieStore = cookies();
	const user: IMinimumUserInfo = await getAuthenticatedUser(
		cookieStore.get("token")!.value
	);
	if (!user) return redirect("/");
	return user.type === "trainer"
		? redirect("/community/trainer")
		: redirect("/community/member");
};

export default CommunityPage;
