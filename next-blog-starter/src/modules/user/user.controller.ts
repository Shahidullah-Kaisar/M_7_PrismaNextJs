import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.status(201).json({
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error,
    });
  }
};



const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUser();

    res.status(200).json({
      message: "User retrived Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error,
    });
  }
};



const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;                 //id is a string by default
    const result = await UserService.getUserById(Number(id));

    res.status(200).json({
      message: "User retrived Successfully",
      data: result,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error,
    });
  }
};



export const UserController = {
  createUser,
  getAllUser,
  getUserById
};
