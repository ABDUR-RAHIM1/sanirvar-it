import { createData } from "@/controllers/createData";
import { errorResponse } from "../helpers/response";
import StudentModel from "@/models/studentRegistration";
import { getAllData } from "@/controllers/getAllData";

/**
 * /api/student
 *  
 */
export const POST = async (req) => {
    const body = await req.json();
   
    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    return createData(StudentModel, body);
}

//  get all students with all information
export async function GET(req) {

    return getAllData(StudentModel, {
        sort: { createdAt: -1 }
    });
};