import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req)=>{
    const {EntityId,EntityName}= await req.json()
    try{
        await prisma.entity.create({
            data:{
                EntityId : EntityId,
                EntityName:EntityName
            }
         })
        return NextResponse.json({message:"Entity created"})  
    
    }catch(err){
        console.error(err);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });

    }finally{
        await prisma.$disconnect()
    }

}   

export const DELETE= async(req)=>{
    const {id} = await req.json()
    try{
        await prisma.entity.delete({where:{EntityId:id}})
        return NextResponse.json({message:"Entity Deleted"})  

    }catch(err){
        console.error(err);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });

    }finally{
        await prisma.$disconnect()
    }
}

export const GET = async()=>{
    try{
        let entities = await prisma.entity.findMany({
            select:{
                EntityName:true,
                EntityId:true
            }
        })
        return NextResponse.json(entities)
    }catch(err){
        console.error(err);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });

    }finally{
        await prisma.$disconnect()
    }
}