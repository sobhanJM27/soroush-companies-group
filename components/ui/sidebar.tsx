"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import BackDrop from "./backdrop";
import { transitionBase } from "@/lib/styles";
import { IconWrapper } from "./icon-wrapper";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ open, setOpen }: Props) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={cn(
          "hidden fixed top-0 left-0 z-40 w-64 p-4 bg-sidebar rounded-xl max-md:flex flex-col gap-2 border-2 border-sidebar-border opacity-0 -translate-x-full",
          { "opacity-100 translate-x-0 z-50": open },
          transitionBase,
        )}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={120}
            height={36}
          />
          <IconWrapper variant="primary" onClick={() => setOpen(false)}>
            <X />
          </IconWrapper>
        </div>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium",
                    transitionBase,
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <BackDrop open={open} setOpen={setOpen} />
    </>
  );
}
