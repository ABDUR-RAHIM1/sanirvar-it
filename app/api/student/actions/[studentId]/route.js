import { deleteData } from "@/controllers/deleteData";
import { updateData } from "@/controllers/updateData";
import StudentModel from "@/models/studentRegistration";



//  /api/student/actions/:studentId   only admin
export const PUT = async (req, { params }) => {

    const { studentId } = await params;
    const body = await req.json();

    return updateData(StudentModel, studentId, body)

}

export const DELETE = async (req, { params }) => {

    const { studentId } = await params;

    return deleteData(StudentModel, studentId)

}