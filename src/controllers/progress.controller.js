// src/controllers/progress.controller.js

let progress = [
  {
    id: "1",
    userId: "1",
    workoutId: "1",
    weight: 80,
    reps: 10,
    date: "2025-09-20",
    notes: "Primera sesión registrada",
    createdAt: "2025-09-20T10:00:00Z"
  }
];

// GET /api/v1/progress
exports.getAllProgress = (req, res) => {
  res.status(200).json(progress);
};