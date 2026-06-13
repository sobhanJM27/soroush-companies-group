"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import ThemeToggle from "../theme-toggle";

export type MobileNavProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({ setOpen }: MobileNavProps) {
  return (
    <nav className="flex md:hidden items-center justify-between h-14">
      <div className="z-40">
        <ThemeToggle />
      </div>
      <Link href="/">
        <Image
          src="/images/logo1.png"
          alt="Soroush Group"
          width={120}
          height={36}
        />
      </Link>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{ touchAction: "manipulation" }}
        className="relative z-100 touch-manipulation cursor-pointer"
      >
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
