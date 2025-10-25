  
import { deleteData } from "@/controllers/deleteData";
import { updateData } from "@/controllers/updateData";
import Course from "@/models/courses";

/**
 * @method PUT
 * @description নির্দিষ্ট কোর্স ID ব্যবহার করে ডেটা আপডেট করে।
 * @url /api/courses/[id]
 */

export async function PUT(request, { params }) {
    const courseId = params.id;
    const body = await request.json();

    if (Object.keys(body).length === 0) {
        return errorResponse("Update body cannot be empty.", 400);
    }
    
    // রিউজেবল কন্ট্রোলার ফাংশন কল করা
    return updateData(Course, courseId, body);
};




/**
 * @method DELETE
 * @description নির্দিষ্ট কোর্স ID ব্যবহার করে ডেটা ডিলিট করে।
 * @url /api/courses/[id]
 */
export async function DELETE(request, { params }) {
    const courseId = params.id;
    
    // রিউজেবল কন্ট্রোলার ফাংশন কল করা
    return deleteData(Course, courseId);
}