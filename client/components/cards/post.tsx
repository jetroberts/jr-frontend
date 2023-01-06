interface PostCardProps {
    fileId: string
    title: string
    date: string 
    abstract: string
}

export default function PostCard({ fileId, title, date, abstract}: PostCardProps) {
    return (
        <article className="my-6 p-2">
            <h2 className="text-xl font-mono font-bold">{title}</h2>
            <p className="text-xs text-gray-400">{date}</p>
            <p className="text-gray-500">{abstract}</p>
            <a className="text-sm" href={"#"}>See more...</a>
        </article>
    )
}