"use client"
import React, { useContext, useState } from "react"
import "katex/dist/katex.min.css"
import MarkdownRenderer from "@/helpers/markdown/MarkdwonRenderer"
import { Button } from "@/components/ui/button"
import Spinner from "@/helpers/Spinner"
import { postAction } from "@/actions/postAction"
import { pageCreate } from "@/constans/Endpoints"
import { globalContext } from "@/ContextApi/ContextApi"

export default function Pages() {
    const { showToast } = useContext(globalContext);
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false)
    const [pageData, setPageData] = useState({
        pageName: "",
        pageContent: ""
    });

    const pages = [
        { id: "about", label: "About Page" },
        { id: "contact", label: "Contact Page" },
        { id: "privacy", label: "Privacy Policy" },
        { id: "terms", label: "Terms & Conditions" }
    ];

    /** handle Change */
    const handleChange = (e) => {
        setPageData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    /**
     *  Handle Submit page
     */

    const handleSubmitPage = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const payload = {
                method: "POST",
                endPoint: pageCreate,
                body: pageData
            }
            const { status, data } = await postAction(payload);
            showToast(status, data)

        } catch (error) {
            console.log(error)
            showToast(500, "failed to save page")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">

            {/* Page Title */}
            <h2 className="text-2xl font-bold mb-4">Static Page Editor</h2>

            {/* Page Selector */}
            <label className="block mb-2 font-medium">Select Page</label>
            <select
                name="pageName"
                value={pageData.pageName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mb-4"
            >
                {pages.map((p) => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                ))}
            </select>

            {/* Toggle: Edit / Preview */}
            <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-700">Editor</span>

                <label className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm">Preview</span>
                    <input
                        type="checkbox"
                        checked={showPreview}
                        onChange={() => setShowPreview(!showPreview)}
                        className="toggle-checkbox"
                    />
                </label>
            </div>

            {/* Editor / Preview Switch */}
            {!showPreview ? (
                <textarea
                    rows={12}
                    name="pageContent"
                    value={pageData.pageContent}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-lg text-sm focus:ring focus:ring-indigo-300"
                    placeholder="Write your page content in Markdown..."
                ></textarea>
            ) : (
                <div className=" markdown p-4 border rounded-lg bg-gray-50  ">
                    <MarkdownRenderer content={pageData.pageContent || "no data yet!"} />

                </div>
            )}

            {/* Save Button */}
            <Button type="submit" onClick={handleSubmitPage} className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                {
                    loading ? <Spinner /> : "Save Page"
                }
            </Button>
        </div>
    )
}
