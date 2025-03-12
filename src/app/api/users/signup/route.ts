import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { sendEmail } from "@/helpers/sendmail";


connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody
    
        console.log(reqBody)
    
        const user = await User.findOne({email})
    
        if(user){
            return NextResponse.json({error:"A user already exists with this Email id"})
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
    
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })
    
        const savedUser = await newUser.save()
    
        console.log(savedUser)
    
        sendEmail({email,emailType:"VERIFY",userId:savedUser._id})

        return NextResponse.json({message:"user has been registered successfully",
            success:true,
            savedUser
        })


    } catch (error) {
        return NextResponse.json({message:"an error has been occured in signing in : " + error})
    }

}