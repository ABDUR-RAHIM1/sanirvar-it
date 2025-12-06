import { baseUrl } from "@/constans/Endpoints";

// user only  without token 
export const getActionUser = async (endpoint) => {


    const res = await fetch(`${baseUrl + endpoint}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    return { status: res.status, data }
}