// src/routes/v1/workouts.routes.js

const express = require('express');
const router = express.Router();
const workoutsController = require('../../controllers/workouts.controller');

router.get('/', workoutsController.getAllWorkouts);
router.get('/:id', workoutsController.getWorkoutById);
router.post('/', workoutsController.createWorkout);
router.put('/:id', workoutsController.updateWorkout);
router.patch('/:id', workoutsController.patchWorkout);
router.delete('/:id', workoutsController.deleteWorkout);

module.exports = router;