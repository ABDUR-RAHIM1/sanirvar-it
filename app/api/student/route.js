import { createData } from "@/controllers/createData";
import { errorResponse } from "../helpers/response";
import StudentModel from "@/models/studentRegistration";
import { getAllData } from "@/controllers/getAllData";
import Course from "@/models/courses";
import { PaymentModel } from "@/models/paymentInfo";
import { NextResponse } from "next/server";

/**
 * /api/student
 *  
 */
// export const POST = async (req) => {
//     const body = await req.json();

//     if (Object.keys(body).length === 0) {
//         return errorResponse("Request body cannot be empty.", 400);
//     };

//     const { paidAmount, method, note } = body;

//     const newBody = {
//         ...body,
//         paidFee: paidAmount
//     }
//     const newStudent = await StudentModel.create(newBody);

//     const newPayment = await PaymentModel.create({
//         student: newStudent._id,
//         paidAmount,
//         method,
//         note
//     });

//     if (!newPayment) {
//         return errorResponse("Payment Created failed", "400")
//     }



//     // return createData(StudentModel, body);
// }

//  get all students with all information for admin only



export const POST = async (req) => {
    const body = await req.json();

    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    const { paidAmount, method, note } = body;
    const lastStudent = await StudentModel.findOne().sort({ createdAt: -1 });


    let nextSerial = 1;
    if (lastStudent?.studentRoll) {
        const lastSerial = parseInt(lastStudent.studentRoll.split("-")[1]);
        if (!isNaN(lastSerial)) nextSerial = lastSerial + 1;
    }

    const newRoll = `15125-${String(nextSerial).padStart(3, "0")}`;

    const newBody = {
        ...body,
        studentRoll: newRoll,
        paidFee: paidAmount,
    };

    const newStudent = await StudentModel.create(newBody);

    const newPayment = await PaymentModel.create({
        student: newStudent._id,
        paidAmount,
        method,
        note,
    });


    if (!newPayment) {
        return errorResponse("Payment creation failed", 400);
    }


    return NextResponse.json({
        message: "Student and payment created successfully",
    }, { status: 201 });
};



export async function GET(req) {

    return getAllData(StudentModel, {
        sort: { createdAt: -1 },
        populate: { path: "course", select: "title price duration " }
    });
};