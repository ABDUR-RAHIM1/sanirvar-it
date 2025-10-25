"use server"
import { baseUrl } from "@/constans/Endpoints";

 

//  use for admin
export const deleteAction = async (api) => {

    // const token = await getAdminToken();


    const res = await fetch(baseUrl + api, {
        method: "DELETE",
        // headers: {
        //     "Authorization": `Bearer ${token}`
        // }
    });

    const data = await res.json();

    return { status: res.status, data }
}