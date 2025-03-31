import Link from 'next/link'
import classes from './postitem.module.css'
import Image from 'next/image'
const PostItem = ({ post }) => {
    const postDate = new Date(post.date).toLocaleDateString('en-us', {
        day : 'numeric',
        month : 'long',
        year : 'numeric'
    })
    const imagePath = `/images/posts/${slug}/${post.image}`
    return (
        <>
            <li className={classes.post}>
                <Link>
                    <div className={classes.image}>
                        <Image 
                            src={imagePath}
                            alt={post.title}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{post.title}</h3>
                        <time>{postDate}</time>
                        <p>{post.excerpt}</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default PostItem