 
import { errorResponse, successResponseWithMessage } from "@/app/api/helpers/response";
import { connectDb } from "@/config/Database";

/**
 * ডেটাবেস থেকে একটি নির্দিষ্ট ডকুমেন্ট ID ব্যবহার করে ডিলিট করে।
 * @param {object} Model - যে Mongoose মডেলের ডেটা ডিলিট করতে হবে।
 * @param {string} id - যে ডকুমেন্টের ID ডিলিট করতে হবে।
 * @returns {NextResponse} - সফল বা ব্যর্থতার JSON রেসপন্স।
 */
export const deleteData = async (Model, id) => {
    await connectDb();

    try {
        // Mongoose ব্যবহার করে ডকুমেন্ট খুঁজে ডিলিট করা
        const deletedDoc = await Model.findByIdAndDelete(id);

        if (!deletedDoc) {
            return errorResponse(`${Model.modelName} with ID ${id} not found for deletion.`, 404);
        }

        // সফল রেসপন্স (200 OK)
        return successResponseWithMessage(`${Model.modelName} successfully deleted.`, 200);

    } catch (error) {
        console.error("Data deletion failed:", error);
        
        if (error.name === 'CastError') {
             return errorResponse(`Invalid ID format.`, 400);
        }

        return errorResponse("Failed to delete data due to a server error.", 500);
    }
};