import { notFound } from "next/navigation";
import { getPost } from "@/data/queries";

export default async function Post({params}: {params: Promise<{id: string}>}) {
    const id = Number((await params).id);
    if (!Number.isInteger(id)) {
        notFound();
    }
    const post = await getPost(id);
    if (!post) {
        notFound();
    }

    return <main><h1>{post.title}</h1><p>{post.description}</p></main>
}