import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./Navitems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between ">
        <Link href="/" className="w-36">
          <Image
            alt="Evently Logo"
            width={128}
            height={38}
            src="/assets/images/logo.svg"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3"></div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <MobileNav />
        </SignedIn>
        <SignedOut>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
