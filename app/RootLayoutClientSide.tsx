'use client';

import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "../context/UserContext";

interface RootLayoutClientSideLayout {
	children: React.ReactNode;
}


const RootLayoutClientSide = ({children}: RootLayoutClientSideLayout) => {
  return (
    <UserProvider>
        <GoogleOAuthProvider clientId='265206041548-8cklgf8qg18cm9s5hrii4fsr7oq20mo0.apps.googleusercontent.com'>
            {children}
        </GoogleOAuthProvider>
    </UserProvider>
  )
}

export default RootLayoutClientSide