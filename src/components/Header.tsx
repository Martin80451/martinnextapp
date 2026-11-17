"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Form from "next/form";

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
      <Form action="/posts">
        <input
          type="search"
          name="criteria"
          placeholder="Search"
          aria-label="Search blog posts"
        />
      </Form>
    </header>
  );
}
