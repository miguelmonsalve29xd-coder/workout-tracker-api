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

// GET /api/v1/progress/:id
exports.getProgressById = (req, res) => {
  const { id } = req.params;
  const entry = progress.find(p => p.id === id);
  if (!entry) {
    return res.status(404).json({ error: 'Registro de progreso no encontrado' });
  }
  res.status(200).json(entry);
};