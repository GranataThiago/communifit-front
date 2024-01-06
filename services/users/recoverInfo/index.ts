import { cookies } from "next/headers";
import { API_KEY, API_URL } from "../../../utils";
import { IUser } from "../../../interfaces/user";

export const getMemberByUsername = async({username} : {username: string}):Promise<IUser | null>=>{
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    let foundUser: IUser | null = null;

    try {
        const request = await fetch(`${API_URL}/users/${username}`, {
            method: "GET",
            headers: {
              token: token as string,
              "api-key": API_KEY as string,
            },
          });

          const response = await request.json();
          foundUser = response.user;
    } catch (error) {
        
    }

      return foundUser
}