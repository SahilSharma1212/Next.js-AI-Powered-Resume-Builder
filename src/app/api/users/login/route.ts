import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'


connect()


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody;
    
        const user = await User.findOne({email})
    
        if(!user){
            return NextResponse.json({error:"Invalid user credentials , check again !"})
        }

    
    
        console.log("user exists")
    
        //check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
    
        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
    
        //create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
    
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
    
        response.cookies.set("token", token, {
            httpOnly: true, 
        })
        return response;
    
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}