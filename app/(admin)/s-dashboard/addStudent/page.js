"use client";
import React, { useState } from "react";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    fathersName: "",
    mothersName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    guardianPhone: "",
    email: "",
    address: "",
    paymentStatus: "unpaid",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", formData);
    alert("Student Registered Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        🎓 Student Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* --- Name --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* --- Father's Name --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Father’s Name *</label>
          <input
            type="text"
            name="fathersName"
            required
            value={formData.fathersName}
            onChange={handleChange}
            placeholder="Enter father's name"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* --- Mother's Name --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mother’s Name *</label>
          <input
            type="text"
            name="mothersName"
            required
            value={formData.mothersName}
            onChange={handleChange}
            placeholder="Enter mother's name"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* --- Date of Birth + Gender --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
            <input
              type="date"
              name="dateOfBirth"
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select Gender</option>
              <option value="male">Male ♂️</option>
              <option value="female">Female ♀️</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* --- Phone Numbers --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 017xxxxxxxx"
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Guardian’s Phone *</label>
            <input
              type="tel"
              name="guardianPhone"
              required
              value={formData.guardianPhone}
              onChange={handleChange}
              placeholder="e.g. 018xxxxxxxx"
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {/* --- Email (Optional) --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* --- Address --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter full address"
            rows="3"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        {/* --- Payment Status --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status *</label>
          <select
            name="paymentStatus"
            required
            value={formData.paymentStatus}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="paid">Paid 💰</option>
            <option value="unpaid">Unpaid ❌</option>
          </select>
        </div>

        {/* --- Photo Upload --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student Photo *</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}
