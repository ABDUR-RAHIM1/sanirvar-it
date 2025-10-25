"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddTrainers() {
  const [trainer, setTrainer] = useState({
    name: "",
    position: "",
    email: "",
    fbId: "",
    webAddress: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTrainer({ ...trainer, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trainer Data:", trainer);
    alert("Trainer added successfully!");
    // এখানে API call বা state update করা যাবে
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Trainer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <Label>Name <span className="text-red-500">*</span></Label>
          <Input
            type="text"
            name="name"
            value={trainer.name}
            onChange={handleChange}
            placeholder="Trainer Name"
            required
          />
        </div>

        {/* Position */}
        <div>
          <Label>Position / Podobi (Optional)</Label>
          <Input
            type="text"
            name="position"
            value={trainer.position}
            onChange={handleChange}
            placeholder="Trainer Position"
          />
        </div>

        {/* Email */}
        <div>
          <Label>Email (Optional)</Label>
          <Input
            type="email"
            name="email"
            value={trainer.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </div>

        {/* Facebook ID */}
        <div>
          <Label>Facebook ID (Optional)</Label>
          <Input
            type="text"
            name="fbId"
            value={trainer.fbId}
            onChange={handleChange}
            placeholder="Facebook Profile URL or ID"
          />
        </div>

        {/* Web Address */}
        <div>
          <Label>Website / Portfolio (Optional)</Label>
          <Input
            type="text"
            name="webAddress"
            value={trainer.webAddress}
            onChange={handleChange}
            placeholder="Website or Portfolio URL"
          />
        </div>

        {/* Photo */}
        <div>
          <Label>Photo (Optional)</Label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1"
          />
          {trainer.photo && (
            <img
              src={trainer.photo}
              alt="Trainer"
              className="mt-2 w-28 h-28 rounded-full object-cover border"
            />
          )}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full mt-4">
          Add Trainer
        </Button>
      </form>
    </div>
  );
}
