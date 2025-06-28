import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import Resume from '@/models/resumeModel';
import { NextRequest, NextResponse } from 'next/server';

connect();


// Define response types for better type safety
interface ErrorResponse {
  message: string;
  error: string;
  stack?: string;
}


export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const reqBody = await request.json();

    // Get userId from token
    const userId = getDataFromToken(request);
    console.log("Extracted userId:", userId); // Check if userId is coming
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Destructure other elements from request body
    const {
      name,
      email,
      phone,
      yourLocation,
      socials,
      workExperience,
      educationalDetails,
      allSkills,
      allProjects,
      softskills,
      description,
      role,
      templatename
    } = reqBody;

    // Create new resume entry
    const newResume = new Resume({
      userId, // Ensure userId is taken from token
      name,
      email,
      phone,
      yourLocation,
      socials,
      workExperience,
      educationalDetails,
      allSkills,
      allProjects,
      softskills,
      description,
      role,
      templatename
    });

    // Save to MongoDB
    await newResume.save();

    // Return success response
    return NextResponse.json(
      { message: 'Resume created successfully', resume: newResume },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("Error saving resume:", error);
    return NextResponse.json(
      { 
        message: "Error saving resume", 
        error: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      } as ErrorResponse, 
      { status: 500 }
    );
  }
}
