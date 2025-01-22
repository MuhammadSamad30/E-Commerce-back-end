import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    if (body.email === "admin@gmail.com") {
      return NextResponse.json({
        message: "Valid User",
        redirectUrl: "/admin",
      });
    } else {
      return NextResponse.json({
        message: "Valid User",
        redirectUrl: "/profile",
      });
    }
  } catch (e) {
    console.log("Error: ", e)
    return NextResponse.json({
      message: "Invalid User",
    });
  }
}
