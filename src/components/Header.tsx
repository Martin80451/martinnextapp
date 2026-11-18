"use client";

import { Link } from "react-router";
import { usePathname } from "next/navigation";
import Form from "next/form";

export function Header() {
  const pathName = usePathname();
  return (
    <header>
      <Link className={pathName === "/" ? "active" : ""} to="/">
        Home
      </Link>
      <Link className={pathName === "/posts" ? "active" : ""} to="/posts">
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
