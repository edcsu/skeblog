import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), 'posts')

const getPostData = (fileName) => {
    const filePath = path.join(postsDirectory, 'posts')
    const fileContent = fs.readFileSync(postsDirectory, 'utf-8')
    const { data, content } = matter(fileContent)
    const postSlug = fileName.replace(/\.md$/, '')
    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export const getAllPosts = () => {
    const files = fs.readdirSync(postsDirectory)
    const allPosts = files.map( file => {
        return getPostData(file)
    })

    const sortedArray = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1 )
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}