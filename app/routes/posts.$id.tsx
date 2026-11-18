import { getPost } from "../../server/queries";
import ErrorBoundary from "@/routes/notfound";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) {
    ErrorBoundary();
  }
  const post = await getPost(id);
  if (!post) {
    ErrorBoundary();
  }

  return (
    <main>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
    </main>
  );
}
