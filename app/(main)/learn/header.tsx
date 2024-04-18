import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 border-slate-200/25 dark:bg-[#131f24] pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px] bg-white">
      <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-5 w-5 stroke-2" />
        </Button>
      </Link>

      <h1 className="text-lg font-bold dark:text-white">{title}</h1>
      <div aria-hidden />
    </div>
  );
};
