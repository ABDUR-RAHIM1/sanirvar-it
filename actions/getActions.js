import { baseUrl } from "@/constans/Endpoints";

  

// admin only 
export const getActions = async (endpoint) => {
 

    const res = await fetch(`${baseUrl + endpoint}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            // "authorization": `Bearer ${token}`
        },
    });

    const data = await res.json();

    return { status: res.status, data }
}