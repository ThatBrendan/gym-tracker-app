let workouts = [];

export function getWorkouts(req, res) {
  res.json(workouts);
}

export function addWorkout(req, res) {
  const newWorkout = {
    id: Date.now().toString(),
    ...req.body,
  };
  workouts.push(newWorkout);
  res.status(201).json(newWorkout);
}

export function updateWorkout(req, res) {
  const { id } = req.params;
  const index = workouts.findIndex((w) => w.id === id);
  if (index === -1) {
    return res.status(404).send("Workout not found");
  }
  workouts[index] = { ...workouts[index], ...req.body };
  res.json(workouts[index]);
}

export function deleteWorkout(req, res) {
  const { id } = req.params;
  workouts = workouts.filter((w) => w.id !== id);
  res.status(204).send();
}
