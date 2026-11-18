import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1>404 - Not Found</h1>
      <p>Could not find the requested resource.</p>
      <Link to="/">Return Home</Link>
    </main>
  );
}
