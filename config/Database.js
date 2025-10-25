import { mongoURI } from "@/constans/Endpoints";
import mongoose from "mongoose";

// MongoDB URI সাধারণত .env.local ফাইল থেকে লোড করা হয়
 

export const connectDb = async () => {
    // যদি MONGO_URI না থাকে, তবে একটি ত্রুটি দেখান
    if (!mongoURI) {
        console.error("❌ MONGO_URI is not defined in environment variables.");
        return;  
    }
 
    if (mongoose.connections[0].readyState) {
        console.log("🟢 Already connected to MongoDB.");
        return;
    }

    try { 
        await mongoose.connect(mongoURI , {
            dbName:"sanirvar_computer_training"
        });
        
        console.log("✅ Successfully connected to MongoDB.");

    } catch (error) {
        console.error("❌ Failed to connect Database:", error.message); 
    }
};