"use client";

import { createPost } from "@/data/createPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function NewPost() {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({
      title,
      description,
    }: {
      title: string;
      description: string;
    }) => createPost(title, description),
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
  function handleClick() {
    mutate({ title: "New Title", description: "New Description" });
  }
  return (
    <div className="actions">
      <button type="button" onClick={handleClick}>
        {isPending ? "Creating..." : "Create New Post"}
      </button>
      {isError && <span role="alert">An unexpected error occurred</span>}
      {isSuccess && (
        <span role="alert" className="success">
          Post successfully created
        </span>
      )}
    </div>
  );
}
