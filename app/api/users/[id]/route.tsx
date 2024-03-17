import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import {prisma} from "@/prisma/client"

export async function GET(request:NextRequest,
    {params}:{params:{id:string}}){
    //fetch data from a db
    //if not found return 404 error
    //else return data
   const user=await prisma.user.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!user)
    return NextResponse.json({error:'User not found'},{status:404})
    
    return NextResponse.json(user)
}
// PUT-replacing object
// PATCH to update one or more properties

export async function PUT(request:NextRequest, 
    {params}:{params:{id:number}}){
    //validate the request body
    const body=await request.json();
   const validation= schema.safeParse(body);
    //if invalid,return 400  
    if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})
    //fetch the user with the given id
    if(params.id>10)
    return NextResponse.json({error:'user is not found'},{status:404})

    return NextResponse.json({id:1,name:body.name})
    //if doesnt exist,return
    // Update the user return the updated user
}

export async function DELETE(request:NextRequest, 
    {params}:{params:{id:number}}){
        if(params.id>10)
         return NextResponse.json({error:'user not found'},{status:404})

         return NextResponse.json({});

}