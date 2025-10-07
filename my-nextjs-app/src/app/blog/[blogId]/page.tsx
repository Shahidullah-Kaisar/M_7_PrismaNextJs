import React from 'react';

const DynamicSingleBlogPage =async ({ params } : { params: Promise<{ blogId: string }> }) => {
    // console.log(await params.blogId)

    const { blogId } = await params;

    return (
        <div>
            <h1 className='text-4xl'>DynamicSingleBlogPage: {blogId}</h1>
        </div>
    );
};

export default DynamicSingleBlogPage;