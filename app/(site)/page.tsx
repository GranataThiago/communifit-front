import { cookieAsJSON, cookieStore } from "../../helpers/cookie";
import { HomeScreen } from "./components/screens/HomeScreen";

export default function Page() {
  const token = cookieStore.get('token');
  const userData = cookieAsJSON('user'); 
  return (
      <HomeScreen />
  );
}
