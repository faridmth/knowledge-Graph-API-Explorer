import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const POST = async (req)=>{
    const {entityId,resultScore} = await req.json()

    try{
        const addedHistory = await prisma.history.create({
            data : {
                ResultScore : resultScore,
                Entity : {
                    connect:{
                        EntityId : entityId
                    }
                }
            }
        })
        return NextResponse.json({ message: "History Created", data: addedHistory }, { status: 201 });

    }catch(err){
        console.error(err)
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }finally{
        await prisma.$disconnect()
    }
}

export const GET = async (req)=>{
    const {searchParams } = new URL(req.url) 
    const entityId =  searchParams .get('entityid')
    
    

    if(!entityId){
        return NextResponse.json({message:"enity Id not Found !"},{status:404})
    }

    try{
        const history = await prisma.history.findMany({
            where : {
                EntityId : entityId
            },
            orderBy:{
                CreatedAt : 'desc'
            }
        })
        return NextResponse.json(history ,{status:200})
    }catch(err){
        console.error(err)
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }finally{
        await prisma.$disconnect()
    }

}
