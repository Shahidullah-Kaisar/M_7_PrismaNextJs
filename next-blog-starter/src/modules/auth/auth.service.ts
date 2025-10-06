import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db"

const loginWithEmailPassword = async({email, password}: {email: string, password: string}) => {
    const result = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(!result) {
        throw new Error("User not found!");
    }

    if(password === result.password){
        return result
    }else {
        throw new Error("Password is incorrect");
    }
}

const loginWithGoogle = async(data: Prisma.UserCreateInput) => {
    let result = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    });

    if(!result) {
        result = await prisma.user.create({
            data
        })
    }
    return result;
}



export const AuthService = {
    loginWithEmailPassword,
    loginWithGoogle
}