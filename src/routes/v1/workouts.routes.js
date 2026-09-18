// src/routes/v1/workouts.routes.js

const express = require('express');
const router = express.Router();
const workoutsController = require('../../controllers/workouts.controller');

// GET /api/v1/workouts
router.get('/', workoutsController.getAllWorkouts);

module.exports = router;