// import { posts } from "@/data/posts";
import Link from "next/link";
import { Suspense } from "react";
import { getAllPosts, getFilteredPosts } from "@/data/queries";

type Props = Promise<{ [key: string]: string | string[] | undefined }>;

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
  const resolvedPosts =
    typeof criteria === "string"
      ? await getFilteredPosts(criteria)
      : await getAllPosts()
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
