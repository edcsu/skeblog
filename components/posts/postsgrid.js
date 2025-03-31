import PostItem from './postitem'
import classes from './postsgrid.module.css'
const PostsGrid = ({ posts }) => {
    return (
        <>
            <ul className={classes.grid}>
                {posts.map(post => (<PostItem />))}
            </ul>
        </>
    )
}

export default PostsGrid