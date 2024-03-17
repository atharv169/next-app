
//GET-getting data
// POST-creating data
// PUT-updating data
import { NextRequest, NextResponse } from "next/server";
import schema from "./[id]/schema";


export function GET(request:NextRequest){
    //fetch users from a db
    return NextResponse.json([
        {id:1,name:'Atharv'},
        {id:2,name:'Arjun'},
    ]);
}
export async function POST(request:NextRequest){
    const body =await request.json();
    const validation=schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400});
    
    return NextResponse.json({id:1,name:body.name});
}