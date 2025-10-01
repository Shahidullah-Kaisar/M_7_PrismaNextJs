import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient();

async function main() {
    // ---------Create Data---------------
    // const result = await prisma.user.create({
    //     data: {
    //         name: "Mahim Mia",
    //         email: "mahimmia@gmail.com",
    //     }
    // })
    // console.log(result);

    // ---------Create Data 2---------------
    // const result = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Mahim Mia22",
    //             email: "mahimmia22@outmail.com",
    //         },
    //         {
    //             name: "Mahim Mia33",
    //             email: "mahimmia33@outmail.com",
    //         },
    //         {
    //             name: "Mahim Mia44",
    //             email: "mahimmia44@outmail.com",
    //         } 
    //     ]
    // })
    // console.log(result);

    // ---------read Data 1 ---------------
    // const data = await prisma.user.findMany();
    // console.log(data);

    // ---------read Data 2 ---------------
    // const data = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // });
    // console.log(data);

    // ---------read Data 3 ---------------
    // const data = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 10
    //     }
    // });
    // console.log(data);

    // ---------Update Data 1---------------
    // const updatedData = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "Sajib",
    //         email: "sajib@gmail.com"
    //     }
    // })
    // console.log(updatedData);

    // ---------Update Data 2---------------
    // const updatedData = await prisma.user.updateMany({
    //     where: {
    //         profilePhoto: null
    //     },
    //     data: {
    //         profilePhoto: "https: //kirevai.png"
    //     }
    // })
    // console.log(updatedData);

    // ---------Update Data 3---------------
    // const updatedData = await prisma.user.updateManyAndReturn({
    //     where: {
    //         id: 3
    //     },
    //     data: {
    //         profilePhoto: "https: //kirevaiImg.png"
    //     }
    // })
    // console.log(updatedData);

    // ---------Delete Data---------------
    //   const deletedData = await prisma.user.delete({
    //     where: {
    //         id: 4
    //     }
    //   })

    //   console.log(deletedData)

    // ---------Delete Data 2---------------
    // const deletedData = await prisma.user.deleteMany({
    // where: {
    //     id: {
    //         lt: 3
    //     } 
    // }
    // })
    // console.log(deletedData)


    // See all data again
    // console.log(await prisma.user.findMany());

    //sorting
    // const sortedData = await prisma.user.findMany({
    //     where: {
    //         name: "Mahim Mia"
    //     },
    //     orderBy: {
    //         id: 'desc'
    //     }
    // })

    // console.log("SortedData", sortedData);

    //searching with sorting
    const sortedData = await prisma.user.findMany({
        where: {
            email: {
                contains: "outmail.com", //default case sensitive
                mode: "insensitive"
            }
        },
        orderBy: {
            id: 'desc'
        }
    })

    console.log("SortedData with Searching", sortedData);

}

main();