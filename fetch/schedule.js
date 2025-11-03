import { getActions } from "@/actions/getActions"
import { scheduleCreateGet } from "@/constans/Endpoints";

export const getAllSchedule = async () => {
    const schedules = await getActions(scheduleCreateGet);
    return schedules
}