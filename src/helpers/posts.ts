import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '/public/posts')

export const getRawPosts = () => fs.readdirSync(postsDirectory)

export const getPostContent = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  return content
}

export const getPosts = () => getRawPosts().map(post => getPostContent(post))
