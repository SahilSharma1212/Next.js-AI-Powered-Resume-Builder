import { connect } from "@/dbConfig/dbConfig";
import Resume from "@/models/resumeModel";
import { NextRequest, NextResponse } from "next/server";

// Define response types for better type safety
interface ErrorResponse {
  message: string;
  error: string;
  stack?: string;
}

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
  } catch (error: unknown) {
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("Error viewing resume:", error);
    return NextResponse.json(
      {
        message: "Error viewing resume",
        error: errorMessage,
        stack: process.env.NODE_ENV === "development" ? errorStack : undefined,
      } as ErrorResponse,
      { status: 500 }
    );
  }
}