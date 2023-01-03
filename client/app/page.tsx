import { getPosts, Post } from "../internal/postprocessor"

export default function LandingPage() {
    const posts = getPosts()
    return (
        <div>
            <h1>This is the landing page</h1>
            {posts.map((post: Post) => <p className="pl-4">{post.title}</p>)}
        </div>
    )
}