"use client";

import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadResultButton({ elementId, fileName }) {
    // const handleDownload = async () => {
    //     const element = document.getElementById(elementId);
    //     if (!element) return;

    //     const canvas = await html2canvas(element, { scale: 2 });
    //     const imgData = canvas.toDataURL("image/png");

    //     const pdf = new jsPDF("p", "mm", "a4");
    //     const pageWidth = pdf.internal.pageSize.getWidth();
    //     const imgProps = pdf.getImageProperties(imgData);
    //     const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    //     pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pdfHeight);
    //     pdf.save(fileName || "result.pdf");
    // };


    const handleDownload = () => {
        alert("ডাউনলোডের কাজ চলতেছে......... ")
    }

    return (
        <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Download PDF
        </button>
    );
}
