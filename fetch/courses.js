import { getActions } from "@/actions/getActions"
import { courseCreateGet } from "@/constans/Endpoints"

export const getAllCourse = async () => {
    const courses = await getActions(courseCreateGet);
    return courses;
}