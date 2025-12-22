import { getActions } from "@/actions/getActions"
import { resultCreateGetAll } from "@/constans/Endpoints"

//  only admin can access 
export const getAllResults = async () => {
    const results = await getActions(resultCreateGetAll);
    return results
}