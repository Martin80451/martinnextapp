"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();
  return (
    <header>
      <Link className={pathName === "/" ? "active" : ""} href="/">
        Home
      </Link>
      <Link className={pathName === "/posts" ? "active" : ""} href="/posts">
        Posts
      </Link>
    </header>
  );
}
