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

// GET /api/v1/workouts
exports.getAllWorkouts = (req, res) => {
  res.status(200).json(workouts);
};

module.exports = exports;