"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import Sidebar from "./sidebar";
import { transitionBase } from "@/lib/styles";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full p-4 z-50 border-b border-border bg-popover">
      <Sidebar open={open} setOpen={setOpen} />
      <nav className="hidden md:flex items-center h-16 gap-5">
        <div className="flex flex-1 items-center">
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="Soroush Companies group"
              width={140}
              height={40}
            />
          </Link>
        </div>
        <ul className="flex justify-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn("font-medium",
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
        <div className="flex flex-1 justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <MobileNav setOpen={setOpen} />
    </header>
  );
}
