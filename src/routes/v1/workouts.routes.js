// src/routes/v1/workouts.routes.js

const express = require('express');
const router = express.Router();
const workoutsController = require('../../controllers/workouts.controller');

// GET /api/v1/workouts
router.get('/', workoutsController.getAllWorkouts);

// GET /api/v1/workouts/:id
router.get('/:id', workoutsController.getWorkoutById);

// POST /api/v1/workouts
router.post('/', workoutsController.createWorkout);

// PUT /api/v1/workouts/:id
router.put('/:id', workoutsController.updateWorkout);

// PATCH /api/v1/workouts/:id
router.patch('/:id', workoutsController.patchWorkout);

module.exports = router;