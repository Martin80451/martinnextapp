import {
  data,
  isRouteErrorResponse,
  type LoaderFunctionArgs,
  useLoaderData,
  useRouteError,
} from "react-router";
import { getPost } from "../../server/queries";
import PostNotFound from "./postnotfound";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id);
  if (!Number.isSafeInteger(id) || id < 1) {
    throw data("Post Not Found", { status: 404 });
  }

  const post = await getPost(id);
  if (!post) {
    throw data("Post Not Found", { status: 404 });
  }

  return post;
}

export default function Post() {
  const post = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <PostNotFound />;
  }

  const status = isRouteErrorResponse(error) ? error.status : 500;
  return (
    <main>
      <h1>{status} - Unable to load this post</h1>
      <p>Please try again later.</p>
    </main>
  );
}
