import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const loginWithEmailPassword = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.loginWithEmailPassword(req.body);

        res.status(200).json({
            message: "User Login Successfully",
            data: result,
        });
    } catch (error: any) {
        console.log(error);

        res.status(500).json({
            error: error.message,
        });
    }
};

const loginWithGoogle = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.loginWithGoogle(req.body);

        res.status(200).json({
            message: "User Login Successfully",
            data: result,
        });
    } catch (error: any) {
        console.log(error);

        res.status(500).json({
            error: error.message,
        });
    }
};


export const AuthController = {
    loginWithEmailPassword,
    loginWithGoogle
};
