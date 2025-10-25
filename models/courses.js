// courses Model 

import mongoose, { Schema } from "mongoose";

// স্কিমা ডিফাইন করা হলো
const courseSchema = new Schema({

    title: {
        type: String,
        required: [true, "Course title is required."],
        trim: true,
        unique: true
    },

    description: {
        type: String,
        required: [true, "Course description is required."],
    },

    duration: {
        type: String,
        required: [true, "Course duration is required."],
    },
 
    price: {
        type: Number,
        required: [true, "Course price is required."],
        min: 0
    },
    
    trainer: {
        type: String,
        required: [true, "Trainer name is required."],
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

 
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;