import { createData } from "@/controllers/createData";
import { errorResponse } from "../helpers/response";
import { PaymentModel } from "@/models/paymentInfo";

//  /api/fees
export const POST = async (req) => {
    const body = await req.json();

    if (Object.keys(body).length === 0) {
        return errorResponse("Request body cannot be empty.", 400);
    }

    return createData(PaymentModel, body);
}