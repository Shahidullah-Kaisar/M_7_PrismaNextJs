/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async() => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-cache" //for ssr
  });
  const { data: {data: blogs} } =await res.json();
  console.log(blogs)

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl py-6">
        {
          blogs.map((blog: any)=> (
            <BlogCard key={blog.id} post={blog}/>
          ))
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
