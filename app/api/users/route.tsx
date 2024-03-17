
//GET-getting data
// POST-creating data
// PUT-updating data
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client"


export async function GET(request:NextRequest){
    const users=prisma.user.findMany()
    //fetch users from a db
    return NextResponse.json(users);
}
export async function POST(request:NextRequest){
    const body =await request.json();
    const validation=schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400});
    
    return NextResponse.json({id:1,name:body.name});
}