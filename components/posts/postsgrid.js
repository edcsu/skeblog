import PostItem from './postitem'
import classes from './postsgrid.module.css'
const PostsGrid = ({ posts }) => {
    return (
        <>
            <ul className={classes.grid}>
                {posts.map(post => (
                    <PostItem post={post} />)
                )}
            </ul>
        </>
    )
}

export default PostsGrid