import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export const getPostFiles = () => {
    const files = fs.readdirSync(postsDirectory)
    return files
}

export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export const getAllPosts = () => {
    const files = getPostFiles()
    const allPosts = files.map( file => {
        return getPostData(file)
    })

    const sortedArray = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1 )
    return sortedArray
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}