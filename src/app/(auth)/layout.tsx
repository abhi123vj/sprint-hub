import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl">
        <nav className="flex justify-between items-center">
          <Image
            src="/assets/logos/sprint-hub-logo.svg"
            alt="logo"
            width={56}
            height={152}
          />
          <Button variant={"secondary"}>Sign Up</Button>
        </nav>
       <div className="flex flex-col items-center justify-center pt-4 md:pt-14" >
       {children}
       </div>
      </div>
    </main>
  );
}
