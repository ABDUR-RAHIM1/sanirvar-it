import mongoose from "mongoose";

const resultSchema = mongoose.Schema({
    resultType: { type: String, required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    totalMark: { type: Number, required: true },
    totalObtained: { type: Number, required: true },
    percentage: { type: Number, required: true },
    subjectWiseResults: { type: [], required: true },
    status: { type: String, required: true },
    grade: { type: String, required: true },
    curriculum: { type: String, required: true, default: "জাতীয় দক্ষতামান শিক্ষাক্রম (৩৬০ ঘন্টা)" },
});


const resultModel = mongoose.models.Results || mongoose.model("Results", resultSchema);

export default resultModel;