import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";

const BlogDetailsPage = async ({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) => {
    const { blogId } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const {data: blog} =await res.json();
    // console.log(blog)

    return (
        <div className="py-10">
           <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;
