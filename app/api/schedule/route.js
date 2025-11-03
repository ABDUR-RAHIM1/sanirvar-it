import { createData } from "@/controllers/createData";
import { getAllData } from "@/controllers/getAllData";
import ScheduleModel from "@/models/schedule";

// Handler for POST method (Create New Schedule)
//  root => /api/schedule
export async function POST(request) {

    const body = await request.json();

    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    return createData(ScheduleModel, body);
};

//  get all schedule 
export async function GET(request) {

    return getAllData(ScheduleModel, {
        sort: { createdAt: -1 }
    });
};