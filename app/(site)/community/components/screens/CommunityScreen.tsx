import Image from "next/image";
import { Post } from "../Post";
import { montserrat, poppins } from "../../../../components";
import { ICommunity } from "../../../../../interfaces/community";
import CommunityActions from "../CommunityActions";

const CommunityScreen = (community: ICommunity) => {
  const { name, displayname, description, posts } = community;
  return (
    <section className={`${montserrat.className} bg-secondary-dark p-6`}>

      <header className="workout flex flex-col grid-cols-2 gap-8 bg-secondary-light rounded-xl p-6">
        <div className="flex flex-col text-center sm:text-start sm:flex-row gap-16 items-center justify-start">
          <Image
                className="rounded-full border-4 border-white"
                src="https://i.pravatar.cc/300"
                alt="fortys"
                width={128}
                height={128}
            />
            <div>
              <h2 className={`${poppins.className} font-bold text-5xl  text-primary`}>Hey Trainer!</h2>
              <p className="text-xl text-surface-light">by Personal Trainer</p>
            </div>
        </div>


          <p className={`text-md col-span-2 text-surface-light`}>Where fitness enthusiasts unite to support, inspire, and achieve collective wellness goals as a community.</p>
          <CommunityActions {...community} />
      </header>


      <nav className="my-4 text-surface-light">
        <ul className="flex gap-4 font-medium text-lg">
          <li className="border-b border-primary">Posts</li>
          <li>Pinned</li>
        </ul>
      </nav>

        <div className="flex flex-col gap-4">
          {posts?.map((post, index) => <Post key={index} {...post} />)}
        </div>
    </section>
  );
};

export default CommunityScreen;
