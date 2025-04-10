"use client"; // This component is a client component, so it can use hooks like useState

import { useState } from "react";

const workoutTypes = [
  "Gym",
  "Fitness studio",
  "Yoga",
  "Outdoor workout",
  "Martial art",
  "Recreational Sport",
  "Spin/Cycle Studio",
  "Wellness/Therapy",
];

const durations = [
  "10 minutes",
  "20 minutes",
  "30 minutes",
  "40 minutes",
  "50 minutes",
  "1 hour",
  "1.5 hours",
  "2 hours",
  "2.5 hours",
  "3+ hours",
];

const intensities = ["Easy", "Intermediate", "Intense"];

const TrackerForm = () => {
  const [step, setStep] = useState(1);
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedIntensity, setSelectedIntensity] = useState("");

  // Step 1: Workout type selection
  const handleWorkoutSelect = (workout: string) => {
    setSelectedWorkout(workout);
  };

  const handleStepOneContinue = () => {
    if (selectedWorkout) {
      setStep(2);
    } else {
      alert("Please select a workout type");
    }
  };

  // Step 2: Form submit (Workout details)
  const handleStepTwoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDuration && selectedIntensity) {
      // Construct the workout payload
      const workoutData = {
        workoutType: selectedWorkout,
        duration: selectedDuration,
        intensity: selectedIntensity,
      };

      try {
        const response = await fetch("http://localhost:5000/api/workouts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workoutData),
        });

        if (!response.ok) {
          throw new Error("Failed to save workout");
        }

        const savedWorkout = await response.json();
        console.log("Workout saved:", savedWorkout);
        window.dispatchEvent(new Event("workoutSaved"));
      } catch (error) {
        console.error("Error while saving workout:", error);
      }

      setStep(3);
    }
  };

  // Reset form for a new entry or for clearing out data
  const handleReset = () => {
    setStep(1);
    setSelectedWorkout("");
    setSelectedDuration("");
    setSelectedIntensity("");
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4 space-y-4">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            What type of workout did you do?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {workoutTypes.map((workout) => (
              <button
                key={workout}
                className={`border p-4 cursor-pointer text-center ${
                  selectedWorkout === workout
                    ? "bg-stone-800 text-white"
                    : "bg-white text-gray-800"
                }`}
                onClick={() => handleWorkoutSelect(workout)}
              >
                {workout}
              </button>
            ))}
          </div>
          <button
            onClick={handleStepOneContinue}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleStepTwoSubmit} className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Workout Details</h2>
          <div>
            <label
              htmlFor="workout-duration"
              className="block text-sm font-medium text-gray-700"
            >
              How long was the workout?
            </label>
            <select
              id="workout-duration"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="mt-1 block w-full border bg-stone-800 rounded-md p-2"
              required
            >
              <option value="" className="bg-black-600">
                Select duration
              </option>
              {durations.map((duration) => (
                <option
                  key={duration}
                  value={duration}
                  className="bg-stone-800"
                >
                  {duration}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="workout-intensity"
              className="block text-sm font-medium text-gray-700"
            >
              How was the workout intensity?
            </label>
            <select
              id="workout-intensity"
              value={selectedIntensity}
              onChange={(e) => setSelectedIntensity(e.target.value)}
              className="mt-1 block w-full border bg-stone-800 rounded-md p-2"
              required
            >
              <option value="">Select intensity</option>
              {intensities.map((intensity) => (
                <option
                  key={intensity}
                  value={intensity}
                  className="bg-stone-800"
                >
                  {intensity}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded mr-4"
          >
            Back
          </button>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Continue
          </button>
        </form>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Confirmation</h2>
          <p className="mb-4">
            You did a <span className="font-bold">{selectedWorkout}</span>{" "}
            workout lasting{" "}
            <span className="font-bold">{selectedDuration}</span> at{" "}
            <span className="font-bold">{selectedIntensity}</span> intensity.
          </p>
          <button
            onClick={handleReset}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Well Done!
          </button>
        </div>
      )}
    </div>
  );
};

export default TrackerForm;
