import { getActionUser } from "@/actions/getActionsUser"
import { pageGetOne } from "@/constans/Endpoints";

 

export const getOnePage = async(pageName)=>{
     const page = await getActionUser(pageGetOne+pageName);
     return page
}