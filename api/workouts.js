import express from "express";
const router = express.Router();
import {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout,
} from "./workoutControllers.js";

router.get("/", getWorkouts);
router.post("/", addWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;
