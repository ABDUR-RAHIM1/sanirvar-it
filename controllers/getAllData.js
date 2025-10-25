
import { errorResponse, successResponseWithData } from "@/app/api/helpers/response";
import { connectDb } from "@/config/Database";

/**
 * ডেটাবেস থেকে একটি নির্দিষ্ট মডেলের সকল ডকুমেন্ট পুনরুদ্ধার করে।
 * * @param {object} Model - যে Mongoose মডেল থেকে ডেটা আনতে হবে (যেমন: Course)।
 * @param {object} [options={}] - Mongoose query options (যেমন: sort, select)।
 * @returns {NextResponse} - সফল (200 OK) বা ব্যর্থতার (404/500) JSON রেসপন্স।
 */
export const getAllData = async (Model, options = {}) => {
 
    await connectDb();

    try {

        const query = Model.find({});

        if (options.sort) {
            query.sort(options.sort);
        }
        if (options.select) {
            query.select(options.select);
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