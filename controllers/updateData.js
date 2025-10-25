
import { errorResponse, successResponseWithMessage, } from "@/app/api/helpers/response";
import { connectDb } from "@/config/Database";

/**
 * ডেটাবেসে একটি নির্দিষ্ট ডকুমেন্ট ID ব্যবহার করে আপডেট করে।
 * @param {object} Model - যে Mongoose মডেলের ডেটা আপডেট করতে হবে।
 * @param {string} id - যে ডকুমেন্টের ID আপডেট করতে হবে।
 * @param {object} body - রিকোয়েস্ট বডি থেকে প্রাপ্ত আপডেটেড ডেটা।
 * @returns {NextResponse} - সফল বা ব্যর্থতার JSON রেসপন্স।
 */

export const updateData = async (Model, id, body) => {
    await connectDb();

    try {
        // Mongoose ব্যবহার করে ডকুমেন্ট খুঁজে আপডেট করা
        const updatedDoc = await Model.findByIdAndUpdate(
            id,
            body,
            { new: true, runValidators: true } // 'new: true' মানে আপডেটের পর নতুন ডকুমেন্টটি রিটার্ন করবে। 'runValidators: true' মানে আপডেটের সময়ও স্কিমা ভ্যালিডেশন চলবে।
        );

        if (!updatedDoc) {
            return errorResponse(`${Model.modelName} with ID ${id} not found for update.`, 404);
        }

        // সফল রেসপন্স
        return successResponseWithMessage("succesfully Updated", 200);

    } catch (error) {
        console.error("Data update failed:", error);

        if (error.name === 'CastError') {
            return errorResponse(`Invalid ID format.`, 400);
        }
        if (error.name === 'ValidationError')
            return errorResponse("Validation Error", 400);
    }

    return errorResponse("Failed to update data due to a server error.", 500);

};