// src/controllers/workouts.controller.js

let workouts = [
  {
    id: "1",
    userId: "1",
    name: "Rutina de pecho",
    date: "2025-09-20",
    duration: 45,
    notes: "Buena sesión",
    createdAt: "2025-09-20T10:00:00Z"
  }
];

// GET /api/v1/workouts?userId=1&date=2025-09-20
exports.getAllWorkouts = (req, res) => {
  res.status(200).json(workouts);
};

// GET /api/v1/workouts/:id
exports.getWorkoutById = (req, res) => {
  const { id } = req.params;
  const workout = workouts.find(w => w.id === id);
  if (!workout) {
    return res.status(404).json({ error: 'Workout no encontrado' });
  }
  res.status(200).json(workout);
};