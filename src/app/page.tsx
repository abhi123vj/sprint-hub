"use client";
import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate }= useLogout();
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-sin");
    }
  });
  return <div className="flex flex-col justify-center ">
    Authorized user
    <Button className="w-2/12" onClick={() => mutate()}>
      Logout
    </Button>
  </div>;
}
