/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: { //for isr
      revalidate: 30
    }
  });
  const {data: {data: blogs} } = await res.json();   //res ache res.data.data er vitore {data: blogs} etar mane data k ami ekhn blogs name a use korbo..
  console.log(blogs)

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-8 max-w-6xl m-auto mb-8">
          {blogs.slice(0,3).map((blog: any) => (
            <BlogCard key={blog.id} post={blog}/>
          ))}
      </div>
    </div>
  );
}
