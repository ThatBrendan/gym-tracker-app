// src/app/components/ScheduleVisitForm.tsx
"use client";

import { useState } from "react";

const ScheduleVisitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const visitData = {
      name,
      email,
      visitDate,
      message,
    };

    try {
      const res = await fetch("http://localhost:5000/api/visits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitData),
      });
      if (!res.ok) {
        throw new Error("Failed to schedule visit");
      }
      const data = await res.json();
      console.log("Visit scheduled:", data);
      setResponseMessage("Your visit has been scheduled successfully!");
      // Optionally clear form fields
      setName("");
      setEmail("");
      setVisitDate("");
      setMessage("");
    } catch (error) {
      console.error("Error scheduling visit:", error);
      setResponseMessage(
        "There was an error scheduling your visit. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Schedule a Visit</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Visit Date</label>
        <input
          type="date"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Message (Optional)
        </label>
        <textarea
          placeholder="Any additional details..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded p-2"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Schedule Visit
      </button>
      {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
    </form>
  );
};

export default ScheduleVisitForm;
