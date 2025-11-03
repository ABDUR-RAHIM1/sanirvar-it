import { deleteData } from "@/controllers/deleteData";
import { updateData } from "@/controllers/updateData";
import ScheduleModel from "@/models/schedule";


//  api => /api/schedule/actions/:id

export const PUT = async (req, { params }) => {
    const { id } = await params;
    const body = await req.json();
    
    return updateData(ScheduleModel, id, body)
}


export const DELETE = async (req, { params }) => {

    const { id } = await params;

    return deleteData(ScheduleModel, id)

}