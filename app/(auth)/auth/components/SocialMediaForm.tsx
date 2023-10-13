import React from "react";
import { BsApple, BsGoogle, BsTwitter } from "react-icons/bs";

export const SocialMediaForm = () => {
  return (
    <div className="w-full">
      <p className="text-center text-gray-400">Or Sign In with</p>
      <ul className="mt-4 flex justify-around">
        <li>
          <BsApple />
        </li>
        <li>
          <BsGoogle />
        </li>
        <li>
          <BsTwitter />
        </li>
      </ul>
    </div>
  );
};
