import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import Resume from "@/models/resumeModel";
import { ResumeSchema } from "@/schemas/resumeSchema";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);

        if (!userId) {
            return NextResponse.json({ error: "Invalid token or user ID missing" }, { status: 401 });
        }

        // ✅ Find user by `_id`
        const retrievedUser = await User.findById(userId);

        if (!retrievedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // ✅ Initialize resumes as `null` before try-catch
        let resumes = null;

        try {
            // ✅ Fetch user resumes safely
            resumes = await Resume.find({ userId });

            if (!resumes) {
                console.log("No resumes found");
            } else {
                console.log("User resume template:");
                resumes.map((oneResume)=>{
                    console.log(oneResume)
                })
            }
        } catch (error) {
            console.error("Error finding resumes:", error);
        }

        const resumeTemplateArray:Array<ResumeSchema> = []

        resumes?.forEach(resume => {
            resumeTemplateArray.push(resume)
        });

        return NextResponse.json({
            message: "User found",
            username: retrievedUser.username, // ✅ Ensure 'username' exists in your model
            templates: resumeTemplateArray || null, // ✅ Ensure `templates` is safe to access
        });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error receiving token data: " }, { status: 400 });
    }
}
