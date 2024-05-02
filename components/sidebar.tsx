import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = async({ className }: SidebarProps) => {
  const user = await currentUser();
  // @ts-ignore
  const { imageUrl } = user;
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2  dark:border-slate-200/25 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <h1 className="text-2xl font-extrabold tracking-wide dark:text-white">
            SpeechSavvy
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
        <SidebarItem label="Letters" href="/letters" iconSrc="https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg" />
        <SidebarItem label="Pronunciation" href="/pronunciation" iconSrc="/microphone.svg" />
        <SidebarItem label="account" href="/userpage" iconSrc={imageUrl} />
      </div>

    </div>
  );
};
