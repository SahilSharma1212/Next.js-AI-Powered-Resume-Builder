import {NextResponse } from "next/server";


export async function GET() {
    try {
        
        const response = NextResponse.json({
            message:"logout successful",
            success:true
        })

        response.cookies.set("token","",{
            httpOnly:true,
            expires: new Date(0)
        })

        return NextResponse.json({message:"successfully logged out"})

    } catch (error) {
        console.log("error logging out : " + error)
    }
}