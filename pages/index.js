import FeaturedPosts from "../components/home/featuredposts"
import Hero from "../components/home/hero"
import { getFeaturedPosts } from "../lib/posts-utils"

const HomePage = (props) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts()

    return {
        props : {
            posts : featuredPosts 
        },
        //revalidate: 60
    }
} 

export default HomePage