import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response; // return the modified response, not a new one
  } catch (error) {
    console.log("error logging out:", error);
    return NextResponse.json({ message: "Logout failed", success: false }, { status: 500 });
  }
}
