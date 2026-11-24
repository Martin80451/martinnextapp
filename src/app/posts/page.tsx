import { PostList } from "@/components/PostList";
import { NewPost } from "@/components/NewPost";

type Props = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Posts({ searchParams }: { searchParams: Props }) {
  return (
    <main>
      <PostsContent searchParams={searchParams} />
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
