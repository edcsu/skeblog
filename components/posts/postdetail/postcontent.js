import PostHeader from "./postheader"
import classes from "./postcontent.module.css"

const post = {
    slug : "getting-started-with-nextjs",
    title : "Getting Started with Next JS",
    image : "getting-started-with-nextjs.png",
    content : "#Next JS is the best full stack React framework",
    date : "2025-03-31",
}

const PostContent = () => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            {post.content}
        </article>
    )
}

export default PostContent