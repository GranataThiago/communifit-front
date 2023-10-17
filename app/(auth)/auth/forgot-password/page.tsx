import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ForgotPassword } from "./forgot-password";

const ForgotPasswordPage = () => {
  // const cookieStore = cookies();
  // if (cookieStore.get("token") && cookieStore.get("token")!.value) {
  //   redirect("/");
  // }

  return <ForgotPassword />;
};

export default ForgotPasswordPage;
