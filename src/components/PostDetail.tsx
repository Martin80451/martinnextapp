"use client";

import { useQuery } from "@tanstack/react-query";
import { ErrorAlert } from "./ErrorAlert";
import { Loading } from "./Loading";
import { notFound } from "next/navigation";
import { getPost } from "@/data/queries";

export default function PostDetail({ id }: { id: number }) {
  const {
    data: post,
    error,
    isPending,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => {
      return getPost(id);
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
