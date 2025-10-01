import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    const createdUser = await prisma.user.create({
        data: payload
    })
    return createdUser;
}


const getAllUser = async() => {
    const result = await prisma.user.findMany({
        select: {
            id: true,        
            name:true,      
            email:true,      
            password:false,   
            role:true,       
            phone:true,     
            picture:true,   
            status:true,     
            isVerified:true, 
            createdAt:true,  
            updatedAt:true,
            posts: true  
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return result;
}


const getUserById = async(id: number) => {
    const result = await prisma.user.findUnique({
        where: {
            id                                //id: id   ----> also correct
        },
        select: {
            id: true,        
            name:true,      
            email:true,      
            password:false,   
            role:true,       
            phone:true,     
            picture:true,   
            status:true,     
            isVerified:true, 
            createdAt:true,  
            updatedAt:true,
            posts: true    
        }
    })
    return result;
}


const updateUserById = async(id: number, payload: Partial<User>) => {
    const result = await prisma.user.update({
        where: {
            id
        },
        data: payload     
    })
    return result;
}


const deleteUserById = async(id: number) => {
    const result = await prisma.user.delete({
        where: {
            id
        }
    })
    return result;
}


export const UserService = {
    createUser,
    getAllUser,
    getUserById,
    deleteUserById,
    updateUserById
}