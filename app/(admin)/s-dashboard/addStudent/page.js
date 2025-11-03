"use client";
import AdmissionForm from "@/components/AdmissionForm";
import React from "react";

export default function AddStudent() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", formData);
    alert("কোন লাভ নাই , কাজ চলতেছে!")
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        🎓 Student Registration Form
      </h2>

      <AdmissionForm
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
