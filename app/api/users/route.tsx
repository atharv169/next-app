
//GET-getting data
// POST-creating data
// PUT-updating data
import { NextRequest, NextResponse } from "next/server";


export function GET(request:NextRequest){
    //fetch users from a db
    return NextResponse.json([
        {id:1,name:'Atharv'},
        {id:2,name:'Arjun'},
    ]);
}
export async function POST(request:NextRequest){
    const body =await request.json();
    if(!body.name)
    return NextResponse.json({error:'Name is required',status:400});
    
    return NextResponse.json({id:1,name:body.name});
}