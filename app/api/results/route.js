import resultModel from "@/models/results";
import { errorResponse, successResponseWithMessage } from "../helpers/response";
import { connectDb } from "@/config/Database";
import { getAllData } from "@/controllers/getAllData";
import StudentModel from "@/models/studentRegistration";

export const POST = async (request) => {
    try {
        const body = await request.json();

        const {
            resultType,
            student,
            totalWrtingMark,
            totalPracticalMark,
            subjectWiseResults
        } = body;

        const curriculumTextFixed =
            "জাতীয় দক্ষতামান শিক্ষাক্রম (৩৬০ ঘন্টা)";

        /* ================= Subject-wise calculation ================= */

        const subjects = subjectWiseResults.map((subject) => {
            let fullMark = 0;

            // subject অনুযায়ী full mark set
            if (subject.subjectName === "writing") {
                fullMark = Number(totalWrtingMark);
            } else {
                fullMark = Number(totalPracticalMark);
            }

            const obtained = Number(subject.mark);
            const percentage = (obtained / fullMark) * 100;

            let grade = "F";
            let status = "FAIL";

            if (percentage >= 80) {
                grade = "A+";
                status = "PASS";
            } else if (percentage >= 70) {
                grade = "A";
                status = "PASS";
            } else if (percentage >= 60) {
                grade = "A-";
                status = "PASS";
            }

            return {
                subjectName: subject.subjectName,
                fullMark,
                obtainedMark: obtained,
                percentage: percentage.toFixed(2),
                grade,
                status
            };
        });

        /* ================= Overall Result ================= */

        const totalMark =
            Number(totalWrtingMark) + Number(totalPracticalMark);

        const totalObtained = subjects.reduce(
            (sum, s) => sum + s.obtainedMark,
            0
        );

        const overallPass = subjects.every(
            (s) => s.status === "PASS"
        );

        const overallPercentage =
            (totalObtained / totalMark) * 100;

        let overallGrade = "F";
        if (overallPercentage >= 80) overallGrade = "A+";
        else if (overallPercentage >= 70) overallGrade = "A";
        else if (overallPercentage >= 60) overallGrade = "A-";

        /* ================= Save Result ================= */
        await connectDb()
        const newResult = await resultModel.create({
            resultType,
            student,
            curriculum: curriculumTextFixed,

            subjectWiseResults: subjects,

            totalMark,
            totalObtained,
            percentage: overallPercentage.toFixed(2),
            status: overallPass ? "PASS" : "FAIL",
            grade: overallPass ? overallGrade : "F"
        });





        return successResponseWithMessage(
            "Result published successfully",
            201,
        );

    } catch (error) {
        console.error(error);
        return errorResponse("failed to post result", 500);
    }
};

 

export async function GET(request) {

    return getAllData(resultModel, {
        sort: { createdAt: -1 },
        populate: { path: "student", select: "studentName studentRoll photo " }
    });
};