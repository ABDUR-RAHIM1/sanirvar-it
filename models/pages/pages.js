import mongoose from "mongoose";

const PagesSchema = mongoose.Schema({
    pageName: { type: String, required: true },
    pageContent: { type: String, required: true }
}, { timestamps: true });


const PageModel = mongoose.models.Pages || mongoose.model("Pages", PagesSchema);

export default PageModel;