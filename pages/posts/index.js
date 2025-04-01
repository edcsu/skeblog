import Head from "next/head"
import AllPosts from "../../components/posts/allposts"
import { getAllPosts } from "../../lib/posts-utils"

const AllPostsPage = (props) => {
    return (
        <>
            <Head>
                <title>All posts</title>
                <meta 
                    name="description"
                    content="A list of all progemming and web development postws"
                />
            </Head>
            <AllPosts posts={props.posts} />
        </>
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