// models/Student.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const EducationSchema = new Schema({
    level: { type: String, trim: true },
    institute: { type: String, trim: true },
    major: { type: String, trim: true },
    year: { type: String, trim: true },
    result: { type: String, trim: true },
    note: { type: String, trim: true }
}, { _id: false });

const StudentSchema = new Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", trim: true, required: true },
    studentRoll: { type: String, required: true },
    schedule: { type: String, required: true, trim: true },
    batch: { type: String, required: true, trim: true },
    registrationStatus: { type: String, required: true, default: "requested" },

    studentName: { type: String, trim: true, required: true },
    fatherName: { type: String, required: true, trim: true },
    motherName: { type: String, required: true, trim: true },

    dob: { type: Date },
    nidOrBirthType: { type: String, required: true, trim: true },
    nidOrBirth: { type: String, required: true, trim: true },
    religion: { type: String, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    bloodGroup: { type: String, trim: true },

    mobileNo: { type: String, trim: true, required: true },
    guardianMobileNo: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },

    vill: { type: String, trim: true },
    post: { type: String, trim: true },
    upozila: { type: String, trim: true },
    dist: { type: String, trim: true },

    education: { type: [EducationSchema], required: true, default: [] },
    paidFee: { type: [], default: [] },

    photo: { type: String, trim: true },

    registerBy: {
        type: String,
        enum: ["mentor", "student"],
        default: "mentor"
    }
}, {
    timestamps: true
});


const StudentModel = mongoose.models.Student || mongoose.model('Student', StudentSchema);
export default StudentModel
