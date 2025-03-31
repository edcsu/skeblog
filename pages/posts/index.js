import AllPosts from "../../components/posts/allposts"
import { getAllPosts } from "../../lib/posts-utils"

const AllPostsPage = (props) => {
    return (
        <AllPosts posts={props.posts} />
    )
}

export const getStaticProps = () => {
    const posts = getAllPosts()

    return {
        props : {
            posts
        }
    }
}

export default AllPostsPage