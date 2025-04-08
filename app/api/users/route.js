import { connectToDatabase } from "@/lib/mongoose";
import user from "@/models/user";
import { connect } from "http2";
import { NextResponse } from "next/server";

export default async function POST(request){
    try{
        await connectToDatabase()
        const {email, password} = await request.json
        const newuser = new user({email, password})
        await newuser.save()
        return NextResponse.json(newuser, {status: 201})
    }catch(err) {
        console.log(err)
    }
}