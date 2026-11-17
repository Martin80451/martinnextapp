import { posts } from "@/data/posts";
import Link from "next/link";

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const criteria = (await searchParams).criteria;
  const resolvedPosts =
    typeof criteria === "string"
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(criteria.toLowerCase()),
        )
      : posts;
  return (
    <main>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
