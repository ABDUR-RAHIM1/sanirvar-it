import { getActions } from "@/actions/getActions"
import { feesCreateGet } from "@/constans/Endpoints";

export const getAllPaymentInfo = async () => {
    const payments = await getActions(feesCreateGet);
    return payments
}