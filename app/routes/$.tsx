import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}
