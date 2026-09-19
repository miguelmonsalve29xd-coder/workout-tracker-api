// src/routes/v1/exercises.routes.js

const express = require('express');
const router = express.Router();
const exercisesController = require('../../controllers/exercises.controller');

// GET /api/v1/exercises
router.get('/', exercisesController.getAllExercises);

module.exports = router;