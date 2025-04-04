import PostItem from './postitem'
import classes from './postsgrid.module.css'
const PostsGrid = ({ posts }) => {
    return (
        <>
            <ul className={classes.grid}>
                {posts.map(post => (
                    <PostItem key={post.slug} post={post} />)
                )}
            </ul>
        </>
    )
}

export default PostsGrid