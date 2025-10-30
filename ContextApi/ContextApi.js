"use client"
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast';

export const globalContext = createContext();

export default function ContextApi({ children }) {

    const [studentLogin, setStudentLogin] = useState(false);
    const [editData, setEditData] = useState(null)

    //  image uploader
    const [imgUrl, setImgUrl] = useState("");
    const [uploadResponse, setUploadResponse] = useState({
        message: "",
        status: 0,
    });



    //  toast 
    const showToast = (status, data, autoClose) => {
        const message = data.message || data;

        const finalAutoClose = typeof autoClose !== "undefined" ? autoClose : (status === 200 || status === 201);

        if (status === 200 || status === 201) {
            toast.success(message, {
                duration: finalAutoClose ? 3000 : Infinity,
                position: "top-center",
                style: {
                    border: '1px solid #4caf50',
                    padding: '12px 16px',
                    color: '#333',
                    background: '#f0fff0',
                    borderRadius: '8px',
                },
                iconTheme: {
                    primary: '#4caf50',
                    secondary: '#fff',
                },
            });
        } else {
            toast.custom((t) => (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: '1px solid #f44336',
                    background: '#fff0f0',
                    padding: "12px 16px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    minWidth: "300px",
                }}>
                    <div style={{ color: "#333", fontWeight: 500 }}>
                        {message}
                    </div>
                    <button
                        style={{
                            marginLeft: "12px",
                            background: "transparent",
                            border: "none",
                            color: "#f44336",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                        onClick={() => toast.dismiss(t.id)}
                    >
                        ✖
                    </button>
                </div>
            ), { duration: 10000, position: "top-center", });
        }
    };


    // 🔹 File Upload Function
    const uploader = async (file) => {
        if (!file) {
            setUploadResponse({
                message: "No file selected",
                status: 400,
            });
            return;
        }

        const form = new FormData();
        form.append("image", file);

        try {
            setUploadResponse({
                message: "Uploading...",
                status: 102,
            });

            const response = await fetch("https://api.imgbb.com/1/upload?key=43c4c04044c45f9e891bfd57845c936e", {
                method: "POST",
                body: form,
            });

            if (!response.ok) {
                throw new Error("Failed to upload");
            }

            const data = await response.json();
            const uploadedUrl = data.data.url;

            setImgUrl(uploadedUrl);
            setUploadResponse({
                message: "Uploaded successfully",
                status: 200,
            });


        } catch (error) {
            console.error("Error uploading:", error);
            setUploadResponse({
                message: "Failed to upload",
                status: 500,
            });

        }
    };




    const value = {
        showToast,
        studentLogin, setStudentLogin,
        editData, setEditData,
        uploader, uploadResponse, imgUrl

    }

    return <globalContext.Provider value={value}>
        {children}
    </globalContext.Provider>
}
