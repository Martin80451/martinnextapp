"use client";

import { useQuery } from "@tanstack/react-query";
import { ErrorAlert } from "./ErrorAlert";
import { Loading } from "./Loading";
import { notFound } from "next/navigation";
import { postSchema } from "@/data/schema";

export default function PostDetail({ id }: { id: number }) {
  const {
    data: post,
    error,
    isPending,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "Blog post not found"
            : "Problem fetching data",
        );
      }
      return postSchema.parse(await response.json());
    },
  });

  if (isPending) {
    return <Loading />;
  }
  if (error) {
    return <ErrorAlert error={error} />;
  }

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
