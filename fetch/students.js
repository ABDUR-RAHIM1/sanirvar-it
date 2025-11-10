import { getActions } from "@/actions/getActions"
import { studentCreateGet } from "@/constans/Endpoints"

export const getAllStudents = async () => {
    const students = await getActions(studentCreateGet);
    return students;
}