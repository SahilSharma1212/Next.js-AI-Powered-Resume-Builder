import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// Define interface for JWT payload
interface JwtPayload {
  id: string;
  username: string;
  email: string;
  [key: string]: unknown; // Allow additional fields for flexibility
}

export const getDataFromToken = (request: NextRequest): string => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: JwtPayload = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
    return decodedToken.id;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};