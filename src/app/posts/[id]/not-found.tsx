import { Link } from "react-router";

export default function PostNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>404 - Post Not Found</h2>
      <p>Could not find the requested post.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}
