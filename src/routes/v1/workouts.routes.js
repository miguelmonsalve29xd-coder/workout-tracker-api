// src/routes/v1/workouts.routes.js

const express = require('express');
const router = express.Router();
const workoutsController = require('../../controllers/workouts.controller');

// GET /api/v1/workouts
router.get('/', workoutsController.getAllWorkouts);

// GET /api/v1/workouts/:id
router.get('/:id', workoutsController.getWorkoutById);

module.exports = router;