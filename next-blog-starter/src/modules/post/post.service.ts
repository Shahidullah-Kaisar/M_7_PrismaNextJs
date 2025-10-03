import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
    const result = await prisma.post.create({
        data: payload,
        include: {
            //---------see all info of user----------------
            //author: true    // The Post model creates a relationship between the user and post using the author's name.

            author: {
                //---------see specific info of user----------------
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });
    return result;
};

//বাম দিকটা ( { page, limit } ) = destructuring (object থেকে value আলাদা করা)।
// ডান দিকটা ( : { page: number; limit: number } ) = type checking (object কেমন হবে সেটা define করা)।
const getAllPost = async ({
    page,
    limit,
    search,
    isFeatured,
    tags
}: {
    page: number;
    limit: number;
    search: string;
    isFeatured?: boolean;
    tags?: string[]
}) => {
    const skip = (page - 1) * limit;

    const where: any = {
        AND: [
            search && {
                OR: [
                    {
                        title: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        content: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            typeof isFeatured === "boolean" && {isFeatured: isFeatured},
            (tags && tags.length > 0) && {tags: {hasEvery: tags}}
        ].filter(Boolean),
    };

    const result = await prisma.post.findMany({
        skip,
        take: limit,
        where,
        orderBy: {
            createdAt: "desc",
        },
    });

    return result;
};

const getPostById = async (id: number) => {
    const result = await prisma.post.findUnique({
        where: {
            id,
        },
    });

    return result;
};

const updatePost = async (id: number, payload: Partial<Post>) => {
    const result = await prisma.post.update({
        where: {
            id,
        },
        data: payload,
    });

    return result;
};

const deletePost = async (id: number) => {
    const result = await prisma.post.delete({
        where: {
            id,
        },
    });

    return result;
};

export const PostService = {
    createPost,
    getAllPost,
    getPostById,
    updatePost,
    deletePost,
};
