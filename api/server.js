import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import workoutsRoutes from "./workouts.js";
import visitRoute from "./visit.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/workouts", workoutsRoutes);
app.use("/api/visits", visitRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
