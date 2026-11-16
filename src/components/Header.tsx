import Link from "next/link";
export function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
}
