import { posts } from "../../server/posts";
import {
  Link,
  type LoaderFunctionArgs,
  useLoaderData,
} from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  const criteria = new URL(request.url).searchParams.getAll("criteria");
  const resolvedPosts =
    criteria.length === 0
      ? posts
      : posts.filter((post) =>
          criteria.every((criterion) =>
            post.title.toLowerCase().includes(criterion.toLowerCase()),
          ),
        );

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
