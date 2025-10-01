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

const getAllPost = async () => {
  const result = await prisma.post.findMany({
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

const updatePost = async(id: number, payload: Partial<Post>) => {
    const result = await prisma.post.update({
        where: {
            id
        },
        data: payload
    });

    return result;
}

const deletePost = async(id: number) => {
    const result = await prisma.post.delete({
        where: {
            id
        }
    })

    return result;
}

export const PostService = {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost
};
