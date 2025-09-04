import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { BlogPost } from "@/components/blog-post"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Emil Sabri`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
