import { connect } from "@/dbConfig/dbConfig";
import Resume from "@/models/resumeModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    // ✅ Extract JSON body
    const reqBody = await request.json();
    const { resumeId } = reqBody;

    if (!resumeId) {
      return NextResponse.json(
        { message: "Resume ID is required", error: "Missing resumeId parameter" },
        { status: 400 }
      );
    }

    console.log("Resume ID:", resumeId);

    const receivedResume = await Resume.findById(resumeId);

    if (!receivedResume) {
      console.log("Resume not found");
      return NextResponse.json(
        { message: "Resume not found", error: "Resume doesn't exist" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: receivedResume });

  } catch (error: any) {
    console.error("Error viewing resume:", error);
    return NextResponse.json(
      { message: "Error viewing resume", error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
