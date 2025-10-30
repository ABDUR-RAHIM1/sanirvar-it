 
import { errorResponse, successResponseWithData, } from "@/app/api/helpers/response";
import Course from "@/models/courses";

/**
 * @method GET
 * @description একটি নির্দিষ্ট কোর্সের ডেটা ID ব্যবহার করে পুনরুদ্ধার করে
 * @url /api/courses/[id]
 */
export async function GET(request, { params }) {
 
    const courseId = params.id;

    if (!courseId) {
        return errorResponse("Course ID is missing in the request path.", 400);
    }

    await connectDb();

    try {

        const course = await Course.findById(courseId);

        if (!course) {
            return errorResponse(`Course with ID ${courseId} not found.`, 404);
        }

        return successResponseWithData(course, 200);

    } catch (error) {
        console.error("Failed to fetch specific course:", error);
     
        if (error.name === 'CastError') {
             return errorResponse(`Invalid course ID format: ${courseId}`, 400);
        }
        
        return errorResponse("Failed to retrieve course due to a server error.", 500);
    }
}