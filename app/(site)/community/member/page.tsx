import { IMinimumUserInfo } from "../../../../interfaces/user";
import React, { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Input } from "../../../components/ui/input";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { FaStar } from "react-icons/fa";
import RecommendedCommunities from "./RecommendedCommunities";
import ListCommunitiesSkeleton from "../../../components/skeletons/ListCommunitiesSkeleton";

const CommunityPageMember = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")!.value;
  const user: IMinimumUserInfo = JSON.parse(cookieStore.get('user')!.value);
  if (!user) return redirect("/");
  if (user.type !== "member") return redirect("/community");

  return (
    <section className="p-6 bg-secondary-dark" data-testid="section">
      <Input variant="filled" type="text" placeholder="Search Communities..." />

      <article className="flex flex-col gap-4 bg-secondary-light p-4 mt-4 rounded-xl">
        <h2 className="text-3xl text-primary font-bold">
          {user.community?.displayname ?? "How to choose your ideal community?"}
        </h2>
        <p className="text-md text-surface-light">
          {user.community?.description ??
            "We strongly encourage you to engage with coaches and ask them any questions you might have in order to identify the best fit for your needs..."}
        </p>

        <Link
          href={user.community?.name ? `/community/${user.community.name}` : ""}
          className="ml-auto"
        >
          <Button
            className={`${user.community?.name ? "w-auto px-2" : "w-32"}`}
          >
            {user.community?.name ? "Ir a mi Comunidad" : "Read more..."}
          </Button>
        </Link>
      </article>

      <p className="mt-6 text-2xl font-bold text-surface-light flex gap-2 items-center">
        Recomendadas <FaStar className="text-primary" />
      </p>
      <div className="mt-6">
        {/* @ts-ignore */}

        <Suspense fallback={<ListCommunitiesSkeleton />}>
          {/* @ts-ignore */}
          <RecommendedCommunities token={token} />
        </Suspense>
      </div>
    </section>
  );
};

export default CommunityPageMember;
