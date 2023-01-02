import { getPosts, getPost, Post } from "../../../internal/postprocessor"

export async function generateStaticParams() {
    const posts: Post[] = getPosts()

    return posts.map((post) => ({
        slug: post.title,
    }))
}

interface PostPageProps {
    params: {
        slug: string
    }
}

export default function PostPage({ params }: PostPageProps) {
    const { slug } = params
    const post = getPost(slug)

    return (
        <div>
            <h1>{slug}</h1>
            <p>{post.content}</p>
        </div>
    )
}