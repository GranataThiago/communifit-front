

'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { API_KEY, API_URL } from "../../../../utils";

async function logout() {
    try {
        // const foundData = await fetch(`${API_URL}/logout`, {
        //     method: "GET",
        //     headers: {
        //         "api-key": API_KEY as string,
        //     },
        // });
        
        // const data = await foundData.json();
        cookies().delete('token');
    } catch (error) {
        console.log(error)   
    }


    redirect('/auth/login');
  }

export default logout;