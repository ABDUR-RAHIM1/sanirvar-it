import { errorResponse, successResponseWithData } from "@/app/api/helpers/response"
import PageModel from "@/models/pages/pages";

export const GET = async (request, { params }) => {
    try {

        const { pageName } = await params;
        const page = await PageModel.findOne({ pageName });

        if (!page) {
            return errorResponse("Page not found!", 404);
        };

        return successResponseWithData(page, 200)


    } catch (error) {
        console.log(error)
        return errorResponse("Failed to fetch page", 500)
    }
}