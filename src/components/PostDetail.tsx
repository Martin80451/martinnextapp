import { notFound } from "next/navigation";
import { getPost } from "@/data/queries";

export default async function PostDetail({ id }: { id: number }) {
  const post = await getPost(id);
  if (!post) {
    notFound();
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </main>
  );
}
