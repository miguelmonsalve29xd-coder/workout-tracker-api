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

// POST /api/v1/progress
exports.createProgress = (req, res) => {
  const { userId, workoutId, weight, reps, date, notes } = req.body;

  if (!userId || !workoutId || !date) {
    return res.status(400).json({ error: 'userId, workoutId y date son requeridos' });
  }

  const newProgress = {
    id: `${Date.now()}`,
    userId,
    workoutId,
    weight: weight || 0,
    reps: reps || 0,
    date,
    notes: notes || '',
    createdAt: new Date().toISOString()
  };

  progress.push(newProgress);
  res.status(201).json(newProgress);
};

// PUT /api/v1/progress/:id
exports.updateProgress = (req, res) => {
  const { id } = req.params;
  const { userId, workoutId, weight, reps, date, notes } = req.body;

  const index = progress.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Registro de progreso no encontrado' });
  }

  if (!userId || !workoutId || !date) {
    return res.status(400).json({ error: 'userId, workoutId y date son requeridos' });
  }

  progress[index] = { ...progress[index], userId, workoutId, weight, reps, date, notes };
  res.status(200).json(progress[index]);
};

// PATCH /api/v1/progress/:id
exports.patchProgress = (req, res) => {
  const { id } = req.params;
  const index = progress.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Registro de progreso no encontrado' });
  }
  progress[index] = { ...progress[index], ...req.body };
  res.status(200).json(progress[index]);
};