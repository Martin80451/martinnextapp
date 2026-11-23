import { Suspense } from "react";
import { Loading } from "@/components/Loading";
import { PostList } from "@/components/PostList";

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
  const resolvedHeading =
    typeof criteria === "string" ? `Posts for ${criteria}` : "Posts";
  return (
    <>
      <h2>{resolvedHeading}</h2>
      <Suspense fallback={<Loading />}>
        <PostList criteria={criteria} />
      </Suspense>
    </>
  );
}
