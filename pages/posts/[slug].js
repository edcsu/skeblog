import Head from "next/head"
import PostContent from "../../components/posts/postdetail/postcontent"
import { getPostData, getPostFiles } from "../../lib/posts-utils"

const PostDetailsPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta 
                    name="description"
                    content={props.post.excerpt}
                />
            </Head>
            <PostContent post={props.post} />        
        </>
    )
}

export const getStaticProps = (context) => {
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props : {
            post : postData
        },
        revalidate: 600
    }
}

export const getStaticPaths = () => {
    const postFilenames = getPostFiles()
    const slugs = postFilenames.map(postFilename => postFilename.replace(/\.md$/, ''))

    return {
        paths : slugs.map( slug => ({ params: { slug }})),
        fallback: false
    }
}

export default PostDetailsPage