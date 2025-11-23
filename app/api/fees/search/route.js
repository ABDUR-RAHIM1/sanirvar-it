import { NextResponse } from "next/server";
import { errorResponse } from "../../helpers/response";
import { PaymentModel } from "@/models/paymentInfo";

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search");

        if (!search) {
            return errorResponse("Search value missing", 400);
        }

        // aggregation pipeline
        const result = await PaymentModel.aggregate([
            {
                $lookup: {
                    from: "students",         // collection name for student
                    localField: "student",    // PaymentInformation.student field
                    foreignField: "_id",
                    as: "student"
                }
            },
            { $unwind: "$student" },

            // match search with studentName or studentRoll inside populated student
            {
                $match: {
                    $or: [
                        { "student.studentName": { $regex: search, $options: "i" } },
                        { "student.studentRoll": search }
                    ]
                }
            }
        ]);

        if (!result.length) {
            return errorResponse("No payment record found", 404);
        }

        return NextResponse.json(result, { status: 200 });

    } catch (error) {
        console.log(error);
        return errorResponse("Internal Server Error", 500);
    }
};
