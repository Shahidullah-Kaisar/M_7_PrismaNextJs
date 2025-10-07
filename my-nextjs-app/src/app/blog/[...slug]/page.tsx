import React from "react";

const CatchAllRoute = async ({ params } : {params: Promise<{ slug: string[] }> }) => {
    // console.log(await params);

    const { slug } = await params;

    return (
        <div>
            {slug.map((sl, index) => (
                <h1 key={index}>Catch all route: {sl}</h1>
            ))}
        </div>
    );
};

export default CatchAllRoute;
