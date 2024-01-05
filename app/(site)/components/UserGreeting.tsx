import { format } from "date-fns";
import React from "react";
import { ImageWithFallback } from "../../components/ImageWithFallback";
import { montserrat } from "../../components/fonts";
import { IUser } from "../../../interfaces/user";
const UserGreeting = ({user}: {user: IUser}) => {

  return (
    <div
      className={`
        w-full
        flex
        flex-col-reverse
        xs:flex-row
        justify-between
        ${montserrat.className}
      `}
    >
      <div className="greetings" data-testid="greetings">
        <p className="font-bold text-xl xxs:text-3xl">
          Hi {(user && user.username) || "Anonymous"},
        </p>
        <p className="font-semibold text-base xxs:text-xl">
          {format(new Date(), "EEEE dd, MMMM")}
        </p>
      </div>
      <div className="">
        <ImageWithFallback
          className="object-contain rounded-full w-24"
          src={user?.image ?? ""}
          alt="fortys"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

{
  /* <div className="greetings">
<p className="font-bold text-3xl">Hi Tyler,</p>
<p className="font-semibold text-xl">Monday 12, December</p>
</div>
<div
className='absolute right-6 top-1/2 -translate-y-1/2'
>
<Image 
        className="object-contain w-24" 
        src="https://i.pravatar.cc/300" 
        alt="fortys" 
        width={0}
        height={0}
        sizes="100vw"
    />
</div> */
}


export default UserGreeting