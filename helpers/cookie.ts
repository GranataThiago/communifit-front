import { cookies } from "next/headers";
export const cookieStore = cookies()

export const cookieAsJSON = (key: string) =>{
    const data = cookieStore.get(key);
    if(!data) return null;
    return JSON.parse(data.value)
}