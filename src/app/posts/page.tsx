import { posts } from "@/data/posts";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

type Props = Promise<{ [key: string]: string | string[] | undefined }>;

type Post = {
  id: number;
  title: string;
  description: string;
};

export default async function Posts({ searchParams }: { searchParams: Props }) {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <PostsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function PostsContent({ searchParams }: { searchParams: Props }) {
  const criteria = (await searchParams).criteria;
  let resolvedPosts: Post | Post[] | undefined;
  if (typeof criteria === "string") {
    resolvedPosts =
      posts.filter((post) =>
        post.title.toLowerCase().includes(criteria.toLowerCase()),
      ) ?? notFound();
  } else if (isStringArray(criteria)) {
    resolvedPosts =
      posts.filter((post) =>
        criteria.every((c) =>
          post.title.toLowerCase().includes(c.toLowerCase()),
        ),
      ) ?? notFound();
  } else {
    resolvedPosts = posts ?? notFound();
  }

  console.log("resolvedPosts", resolvedPosts);
  const resolvedHeading =
    typeof criteria === "string" ? `Posts for ${criteria}` : "Posts";
  return (
    <>
      <h2>{resolvedHeading}</h2>
      <ul>
        {resolvedPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}
