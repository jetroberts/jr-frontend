import path from "path"
import fs from 'fs';
import matter from "gray-matter";

const postsLocation = path.join(process.cwd(), 'posts')

export interface Post {
    id: string
    title: string
    date: string
    content: string
}

export function getPosts(): Post[] {
    const fileNames = fs.readdirSync(postsLocation)
    const postData: Post[] = fileNames.map((filename: string) => {
        const fileId = filename.replace(/\.md$/, '')
        const fullPath = path.join(postsLocation, filename)
        const filecontents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(filecontents)        

        return <Post>{
            id: fileId,
            title: matterResult.data.title,
            date: matterResult.data.date,
            content: matterResult.content
        }
    })

    return postData
}

export function getPost(id: string): Post {
    const posts: Post[] = getPosts()
    const currentPost = posts.filter(post => post.id === id)
    if(currentPost.length === 0) {
        return <Post>{}
    }

    return currentPost[0]
}