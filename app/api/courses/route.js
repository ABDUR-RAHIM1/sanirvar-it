
import { errorResponse } from "../helpers/response";
import { getAllData } from "@/controllers/getAllData";
import { createData } from "@/controllers/createData";
import Course from "@/models/courses";

// Handler for POST method (Create New Course)
export async function POST(request) {
   
    const body = await request.json();
 
    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    return createData(Course, body);
};



// Handler for GET method (All Course)
export async function GET(request) {

    return getAllData(Course, {
        sort: { createdAt: -1 }
    });

};



