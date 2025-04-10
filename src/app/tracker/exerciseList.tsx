"use client";

import React, { useEffect, useState } from "react";

interface Workout {
  id: string;
  workoutType: string;
  duration: string;
  intensity: string;
}

const ExerciseList = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/workouts");
        if (!res.ok) {
          throw new Error("Failed to fetch workouts");
        }
        const data = await res.json();
        setWorkouts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Workouts</h2>
      <div className="grid grid-cols-1 gap-4">
        {workouts.map((workout) => (
          <div key={workout.id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{workout.workoutType}</h3>
            <p>Duration: {workout.duration}</p>
            <p>Intensity: {workout.intensity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
