"use server"

import { baseUrl } from "@/constans/Endpoints";

export const postAction = async (payload) => {

    // const token = await getAdminToken();

    const { method, endPoint, body } = payload;
 

    const res = await fetch(baseUrl + endPoint, {
        method: method, // pass from components
        headers: {
            "Content-type": "application/json",
            // "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify(body)
    });

    const data = await res.json();
   
    return {
        status: res.status,
        data: data
    }

}