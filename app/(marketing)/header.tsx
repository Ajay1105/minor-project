import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  // auth,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { links } from "@/config";

export const Header = () => {
  // const { userId } = auth();

  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto w-full flex h-full items-center justify-between px-8">
        <Link href="/" className="flex items-center pb-7 pt-8">
          <div className="h-[60px] w-[60px]">
            <img src="/abc-removebg.png" alt="Mascot" className="object-cover"/>
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide">
            SpeechSavvy
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="ghost">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>

            <Link
              href={links.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              // className={userId ? "pt-1.5" : "pt-3"}
            >
              <Image
                src="/github.svg"
                alt="Source Code"
                height={30}
                width={30}
              />
            </Link>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};