import { NextRequest , NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const body = await request.json();
    try {
        if(body.email == "admin@gmail.com"){
            return NextResponse.json({
                messsage: "Valid User",
                redirectUrl: "/admin"
            });
        }else{
            return NextResponse.json({
                messsage: "Valid User",
                redirectUrl: "/user"
            });
        }
    } catch (error:any) {
        return NextResponse.json({
            messsage: "Invalid User"
        })
    }
}