import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest,
    {params}:{params:{id:number}}){
    //fetch data from a db
    //if not found return 404 error
    //else return data
    if(params.id>10)
    return NextResponse.json({error:'User not found'},{status:404})
    
    return NextResponse.json({id:1,name:'Atharv'})
}
// PUT-replacing object
// PATCH to update one or more properties

export async function PUT(request:NextRequest, 
    {params}:{params:{id:number}}){
    //validate the request body
    const body=await request.json();
    //if invalid,return 400  
    if(!body.name)
    return NextResponse.json({error:'Name is required'},{status:400})
    //fetch the user with the given id
    if(params.id>10)
    return NextResponse.json({error:'user is not found'},{status:404})

    return NextResponse.json({id:1,name:body.name})
    //if doesnt exist,return
    // Update the user return the updated user

}