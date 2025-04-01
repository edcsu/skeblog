import PostsGrid from "../posts/postsgrid"
import classes from "./featuredposts.module.css"
const FeaturedPosts = ({ posts }) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts