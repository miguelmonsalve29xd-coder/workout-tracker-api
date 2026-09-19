// src/controllers/exercises.controller.js

let exercises = [
  {
    id: "1",
    name: "Press de banca",
    muscleGroup: "pecho",
    equipment: "barra",
    difficulty: "intermedio",
    createdAt: "2025-09-20T10:00:00Z"
  }
];

// GET /api/v1/exercises
exports.getAllExercises = (req, res) => {
  res.status(200).json(exercises);
};