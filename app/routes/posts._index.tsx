import { posts } from "../../server/posts";
import { Link, type LoaderFunctionArgs, useLoaderData } from "react-router";
import { getAllPosts, getFilteredPosts } from "@/../server/queries";

export async function loader({ request }: LoaderFunctionArgs) {
  const criteria = new URL(request.url).searchParams.getAll("criteria");
  const resolvedPosts =
    criteria.length === 0
      ? await getAllPosts()
      : await getFilteredPosts(criteria)

  return {
    resolvedPosts,
    resolvedHeading:
      criteria.length === 1 ? `Posts for ${criteria[0]}` : "Posts",
  };
}

export default function PostsIndex() {
  const { resolvedPosts, resolvedHeading } = useLoaderData<typeof loader>();

  return (
    <main>
      <h2>{resolvedHeading}</h2>
      {resolvedPosts.length === 0 ? (
        <p>No posts match your search.</p>
      ) : (
        <ul>
          {resolvedPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
