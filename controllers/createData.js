import { errorResponse, successResponseWithMessage } from "@/app/api/helpers/response";
import { connectDb } from "@/config/Database";


/**
 * ডেটাবেসে একটি নতুন ডকুমেন্ট তৈরি করে এবং JSON রেসপন্স রিটার্ন করে।
 * @param {object} Model - যে Mongoose মডেলের ডেটা তৈরি করতে হবে (যেমন: Course)।
 * @param {object} body - রিকোয়েস্ট বডি থেকে প্রাপ্ত ডেটা (নতুন ডকুমেন্টের ফিল্ড)।
 * @returns {NextResponse} - সফল (201 Created) বা ব্যর্থতার (400/409/500) JSON রেসপন্স।
 */
export const createData = async (Model, body) => {

    await connectDb();

    try {

        await Model.create(body);

        return successResponseWithMessage("successfully Course Add", 201);

    } catch (error) {
        console.error("Data creation failed:", error);

        if (error.name === 'ValidationError') {
            return errorResponse("All Feild Are Required", 400);
        }


        if (error.code === 11000) {
            const key = Object.keys(error.keyValue)[0];
            return errorResponse(`The ${key} already exists.`, 409);
        }

        return errorResponse("Failed to create data due to a server error.", 500);
    }
};