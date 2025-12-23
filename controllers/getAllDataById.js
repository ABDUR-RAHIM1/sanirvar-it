import { errorResponse, successResponseWithData } from "@/app/api/helpers/response";
import { connectDb } from "@/config/Database";


/**
 * ডেটাবেস থেকে একটি নির্দিষ্ট মডেলের সকল ডকুমেন্ট পুনরুদ্ধার করে।
 * * @param {object} Model - যে Mongoose মডেল থেকে ডেটা আনতে হবে (যেমন: Course)।
 * @param {object} [options={}] - Mongoose query options (যেমন: sort, select)।
 * @returns {NextResponse} - সফল (200 OK) বা ব্যর্থতার (404/500) JSON রেসপন্স।
 
 Example : /api/result/getOne/:id (pages)
*/
export const getAllDataById = async (Model, options = {}, { params }) => {

    const { id } = await params;
    await connectDb();

    try {

        let query = Model.findById(id);

        if (options.sort) {
            query.sort(options.sort);
        }
        if (options.select) {
            query.select(options.select);
        }

        // populate with optional select
        if (options.populate) {
            // options.populate can be string or object
            if (typeof options.populate === "string") {
                query = query.populate(options.populate); // all fields
            } else if (typeof options.populate === "object") {
                // { path: "course", select: "courseName duration" }
                query = query.populate(options.populate.path, options.populate.select);
            }
        }

        const data = await query.exec();

        if (data.length === 0) {
            return errorResponse(`No data found in the ${Model.modelName} collection.`, 404);
        }

        return successResponseWithData(data, 200);

    } catch (error) {
        console.error(`Error fetching all ${Model.modelName}:`, error);
        return errorResponse("Failed to retrieve data due to a server error.", 500);
    }
};