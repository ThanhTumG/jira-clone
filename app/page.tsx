"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  return (
    <div>
      Only visible for authorized user
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
