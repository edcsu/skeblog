import FeaturedPosts from "../components/home/featuredposts"
import Hero from "../components/home/hero"

const posts = [
    {
        slug : "getting-started-with-nextjs",
        title : "Getting Started with Next JS",
        image : "getting-started-with-nextjs.png",
        excerpt : "Next JS is the best full stack React framework",
        date : "2025-03-31",
    },
    {
        slug : "nextjs-file-based-routing",
        title : "Next JS file based routing",
        image : "nextjs-file-based-routing.png",
        excerpt : "File based routing in Next JS makes it seamless to create SPA's",
        date : "2025-02-25",
    }
]

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    )
}

export default HomePage