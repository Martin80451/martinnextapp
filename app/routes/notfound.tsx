import { isRouteErrorResponse, useRouteError } from "react-router";
import PostNotFound from "@/routes/posts.$";
import NotFound from "@/routes/$";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <PostNotFound />;
  }

  return <NotFound />;
}
