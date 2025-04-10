import express from "express";
const router = express.Router();
import { createVisit, getVisits } from "./visitController.js";

// POST to create a scheduled visit
router.post("/", createVisit);

// (Optional) GET to retrieve all visits
router.get("/", getVisits);

export default router;
