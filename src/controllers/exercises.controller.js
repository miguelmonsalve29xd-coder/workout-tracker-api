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

// GET /api/v1/exercises/:id
exports.getExerciseById = (req, res) => {
  const { id } = req.params;
  const exercise = exercises.find(e => e.id === id);
  if (!exercise) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }
  res.status(200).json(exercise);
};

// POST /api/v1/exercises
exports.createExercise = (req, res) => {
  const { name, muscleGroup, equipment, difficulty } = req.body;

  if (!name || !muscleGroup) {
    return res.status(400).json({ error: 'name y muscleGroup son requeridos' });
  }

  const newExercise = {
    id: `${Date.now()}`,
    name,
    muscleGroup,
    equipment: equipment || '',
    difficulty: difficulty || 'principiante',
    createdAt: new Date().toISOString()
  };

  exercises.push(newExercise);
  res.status(201).json(newExercise);
};


// PUT /api/v1/exercises/:id
exports.updateExercise = (req, res) => {
  const { id } = req.params;
  const { name, muscleGroup, equipment, difficulty } = req.body;

  const index = exercises.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }

  if (!name || !muscleGroup) {
    return res.status(400).json({ error: 'name y muscleGroup son requeridos' });
  }

  exercises[index] = { ...exercises[index], name, muscleGroup, equipment, difficulty };
  res.status(200).json(exercises[index]);
};

// PATCH /api/v1/exercises/:id
exports.patchExercise = (req, res) => {
  const { id } = req.params;
  const index = exercises.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }
  exercises[index] = { ...exercises[index], ...req.body };
  res.status(200).json(exercises[index]);
};

// DELETE /api/v1/exercises/:id
exports.deleteExercise = (req, res) => {
  const { id } = req.params;
  const index = exercises.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }
  exercises.splice(index, 1);
  res.status(204).send();
};