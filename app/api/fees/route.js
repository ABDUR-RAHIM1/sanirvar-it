
import { errorResponse, successResponseWithMessage } from "../helpers/response";
import { PaymentModel } from "@/models/paymentInfo";
import StudentModel from "@/models/studentRegistration";

//  /api/fees 
export const POST = async (req) => {
    const body = await req.json();
 
    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    const { studentId, paidAmount, method, note } = body;

    try {
        const isStudent = await StudentModel.findById(studentId);

        if (!isStudent) {
            return errorResponse("Student not found!", 404);
        }

        // ✅ নতুন Payment তৈরি
        const newFee = await PaymentModel.create({
            student: studentId,
            paidAmount,
            method,
            note,
        });

        // ✅ Student model এ paidFee তে নতুন amount যোগ করা
        isStudent.paidFee.push(paidAmount);
 
        // ✅ আপডেট save করা
        await isStudent.save();

        return successResponseWithMessage("succesfully Added", 201)

    } catch (error) {
        console.error(error);
        return errorResponse("Failed to add fee", 500);
    }
};
