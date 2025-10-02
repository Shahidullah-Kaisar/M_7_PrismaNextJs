import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await PostService.createPost(req.body);

        res.status(201).json({
            message: "Post Created Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error,
        });
    }
};

const getAllPost = async (req: Request, res: Response) => {
    try {
        // const {page, limit} = req.query;    // req.query --->  er value hocche { page: '2', limit: '10' }

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = (req.query.search as string) || "";
        const isFeatured = req.query.isFeatured ? req.query.isFeatured  === "true" : undefined;

        const result = await PostService.getAllPost({ page, limit, search, isFeatured });

        res.status(200).json({
            message: "Post retrived Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error,
        });
    }
};

const getPostById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await PostService.getPostById(Number(id));

        res.status(200).json({
            message: "Post retrived Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error,
        });
    }
};

const updatePost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await PostService.updatePost(Number(id), req.body);

        res.status(200).json({
            message: "Post updated Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error,
        });
    }
};

const deletePost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await PostService.deletePost(Number(id));

        res.status(200).json({
            message: "Post deleted Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error,
        });
    }
};

export const PostController = {
    createPost,
    getAllPost,
    getPostById,
    updatePost,
    deletePost,
};
