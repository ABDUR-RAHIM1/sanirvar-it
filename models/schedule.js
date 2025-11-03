import mongoose from "mongoose";

const scheduleSchema = mongoose.Schema({
    scheduleName: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const ScheduleModel = mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);
export default ScheduleModel;