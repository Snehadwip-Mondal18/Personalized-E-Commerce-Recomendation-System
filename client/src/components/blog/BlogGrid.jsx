import blogPosts from "../../data/blog/blogPosts"
import BlogCard from "./BlogCard"

export default function BlogGrid() {

  return (

    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">

        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}

      </div>

    </section>
  )
}