"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  const pathName = usePathname();

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/Logo.svg" height={56} width={152} alt="Logo" />

          <div className="flex items-center gap-2">
            <Button asChild variant={"secondary"}>
              <Link href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}>
                {pathName === "/sign-in" ? "Sign Up" : "Login"}
              </Link>
            </Button>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:py-14">
          {children}
        </div>
      </div>
    </div>
  );
}
