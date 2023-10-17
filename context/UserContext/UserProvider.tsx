"use client";
import React, { useEffect, useReducer } from "react";
import { UserContext, userReducer } from ".";
import { useCookies } from "react-cookie";
import { RegisterUser, User } from "../../interfaces/user";
import { loginUser } from "../../services/auth/login";
import { decryptUser } from "../../services/auth/decrypt";
import { createUserAndGetToken } from "../../services/users/register";
import { ICreateUserResponse } from "../../interfaces";
import { useRouter } from "next/navigation";

export interface UserState {
  token: string | null;
  user: User | null;
}

const USER_INITIAL_STATE: UserState = {
  token: null,
  user: null,
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    decryptUserData();
  }, []);

  const register = async (user: RegisterUser) => {
    const { objective = null, ...userData } = user;
    const data: ICreateUserResponse = await createUserAndGetToken({
      user: userData,
    });
    if (!data || !data.token) return alert("Create user error");

    dispatch({
      type: "[USER] Login",
      payload: { token: data.token, user: { ...user, image: "asd" } },
    });
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await loginUser({ email, password });
      if (!data || !data.token) return false;

      const { token } = data;

      setCookie("token", data.token, {
        path: "/",
      });

      const userData = await decryptUser({ token });
      let user = null;
      if (userData && userData.user) {
        user = userData.user;
      }

      dispatch({ type: "[USER] Login", payload: { user, token } });

      return true;
    } catch (err) {
      console.log(err);
      removeCookie("token");
      return false;
    }
  };

  const decryptUserData = async () => {
    try {
      const { token } = cookies;
      if (!token) return;

      const data = await decryptUser({ token });
      if (!data) return;

      dispatch({
        type: "[USER] Login",
        payload: { token, user: data.user },
      });
    } catch (err) {
      console.log(err);
      removeCookie("token");
      return;
    }
  };

  const logout = () => {
    try {
      dispatch({ type: "[USER] Logout" });
      removeCookie("token");
      router.push("/auth/login");
      return true;
    } catch (err) {
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        login,
        register,
        decryptUserData,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
