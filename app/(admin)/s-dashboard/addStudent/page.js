"use client";
import { postAction } from "@/actions/postAction";
import AdmissionForm from "@/components/AdmissionForm";
import { studentCreateGet } from "@/constans/Endpoints";
import { globalContext } from "@/ContextApi/ContextApi";
import React, { useContext, useState } from "react";

export default function AddStudent() {

  const { showToast, studentFormData } = useContext(globalContext);
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      const newBody = {
        ...studentFormData,
        registerBy: "mentor"
      }

      const payload = {
        method: "POST",
        endPoint: studentCreateGet,
        body: newBody
      };
    
      const { status, data } = await postAction(payload)

      showToast(status, data)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        🎓 Student Registration Form
      </h2>

      <AdmissionForm
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
