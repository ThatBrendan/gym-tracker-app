"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface DashboardData {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

const DashboardDataList = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2c62ff1996mshda46e898eee2690p11ae95jsn69aac4340f58",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className="text-center text-3xl m-4">Exercises</p>
      <div className="grid grid-cols-3 gap-2 w-full p-6">
        {dashboardData.map((exercise) => (
          <div
            key={exercise.id}
            className="p-2  mb-6  border-1 border-slate-400 rounded-lg"
          >
            <h2 className="text-center capitalize text-xl font-bold">
              {exercise.name}
            </h2>
            <p>Body Part: {exercise.bodyPart}</p>
            <p>Target: {exercise.target}</p>
            <Image
              src={exercise.gifUrl}
              alt={exercise.name}
              width={150}
              height={100}
              className="rounded-lg object-cover "
            />
            <h3 className="text-lg font-semibold mt-2">Instructions:</h3>
            <ul className=" list-none">
              {exercise.instructions.map((instruction, index) => (
                <li key={`${exercise.id}-${index}`} className="text-sm">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardDataList;
