"use client";

import { Link } from "react-router";
import { useLocation } from "react-router";
import { Form } from "react-router";

export function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <Link className={pathname === "/" ? "active" : ""} to="/">
        Home
      </Link>
      <Link className={pathname === "/posts" ? "active" : ""} to="/posts">
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
