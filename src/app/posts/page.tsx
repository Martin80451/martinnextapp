import { PostList } from "@/components/PostList";
import { Suspense } from "react";
import { Loading } from "@/components/Loading";
import { NewPost } from "@/components/NewPost";

type Props = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Posts({ searchParams }: { searchParams: Props }) {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <PostsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function PostsContent({ searchParams }: { searchParams: Props }) {
  const criteria = (await searchParams).criteria;
  const resolvedHeading =
    typeof criteria === "string" ? `Posts for ${criteria}` : "Posts";
  return (
    <main>
      <h2>{resolvedHeading}</h2>
      <NewPost />
      <PostList criteria={criteria} />
    </main>
  );
}
