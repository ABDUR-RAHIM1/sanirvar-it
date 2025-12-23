import { getActions } from "@/actions/getActions"
import { resultCreateGetAll, resultCreateGetSingel } from "@/constans/Endpoints"

//  only admin can access 
export const getAllResults = async () => {
    const results = await getActions(resultCreateGetAll);
    return results
};


//** single result get by admin and student */
export const getSingelResult = async (resultId) => {
    const results = await getActions(resultCreateGetSingel + resultId);
    return results
};
