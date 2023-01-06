import PostCard from "../components/cards/post"
import { getPosts, Post } from "../internal/postprocessor"

export default function LandingPage() {
    const posts = getPosts()
    
    return (
        <div>
            <h1>This is the landing page</h1>
            {posts.map((post: Post) => {
                return <PostCard 
                            fileId={post.id}
                            title={post.title}
                            date={post.date}
                            abstract={"Some small bit of info on the article"}
                        />
            })}
        </div>
    )
}