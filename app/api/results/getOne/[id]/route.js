import { errorResponse } from "@/app/api/helpers/response";
import { connectDb } from "@/config/Database";
import { getAllDataById } from "@/controllers/getAllDataById";
import Course from "@/models/courses";
import resultModel from "@/models/results";
import StudentModel from "@/models/studentRegistration";
import { NextResponse } from "next/server";


// export async function GET(request, { params }) {

//     return getAllDataById(resultModel, {
//         populate: { path: "student", select: "studentName studentRoll photo fatherName motherName dob  " }
//     }, { params });
// };

export async function GET(request, { params }) {

    try {
        const { id } = await params
        await connectDb()
        const result = await resultModel.findById(id)
            .populate({
                path: "student",
                select: "studentName studentRoll photo fatherName motherName dob course",
                populate: { path: "course", select: "title duration" }
            })

        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        return errorResponse("Internal Server Error", 500)
    }

}
