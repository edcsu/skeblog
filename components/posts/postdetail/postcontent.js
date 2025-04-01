import PostHeader from "./postheader"
import classes from "./postcontent.module.css"
import ReactMarkdown  from "react-markdown"
import Image from "next/image"

const PostContent = (props) => {
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    const customRenderers = {
        // image(image) {
        //     return <Image 
        //         src={`/images/posts/${post.slug}/${image.src}`} 
        //         alt={image.alt} 
        //         width={600} 
        //         height={300} />
        // },
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                console.log(image)

                return (
                    <div className={classes.image}>
                        <Image
                            src={`${image.properties.src}`}
                            alt={image.properties.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                )
            }
            return (<p>{paragraph.children}</p>)
        }

    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers} >
                { post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent