import classes from './allposts.module.css'
import PostsGrid from './postsgrid'

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
    </section>
  )
}

export default AllPosts