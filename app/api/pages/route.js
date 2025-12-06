import { createData } from "@/controllers/createData";
import { errorResponse } from "../helpers/response";
import PageModel from "@/models/pages/pages";

export const POST = async (request) => {
    const body = await request.json();

    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    return createData(PageModel, body);
};



// Handler for GET method (All Course)
// export async function GET(request) {

//     return getAllData(Course, {
//         sort: { createdAt: -1 }
//     });

// };
