import { connect } from "@/dbConfig/dbConfig";
import Resume from "@/models/resumeModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
    try {
        // ✅ Get `resumeId` from query params
        const resumeId = request.nextUrl.searchParams.get("resumeId");

        if (!resumeId) {
            return NextResponse.json({ message: "resumeId is required", success: false }, { status: 400 });
        }

        // ✅ Check if resume exists
        const foundResume = await Resume.findById(resumeId);
        if (!foundResume) {
            return NextResponse.json({ message: "Resume not found", success: false }, { status: 404 });
        }

        // ✅ Delete resume
        await Resume.deleteOne({ _id: resumeId });

        return NextResponse.json({ message: "Resume deleted successfully", success: true }, { status: 200 });

    } catch (error) {
        console.error("Error deleting resume:", error);
        return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 });
    }
}
