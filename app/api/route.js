// test api 

import { connectDb } from "@/config/Database"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        await connectDb()
        return NextResponse.json({
            message: "API is Running"
        })

    } catch (error) {
        console.log(error)
    }
}