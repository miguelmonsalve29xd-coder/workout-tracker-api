// src/routes/v1/exercises.routes.js

const express = require('express');
const router = express.Router();
const exercisesController = require('../../controllers/exercises.controller');

router.get('/', exercisesController.getAllExercises);
router.get('/:id', exercisesController.getExerciseById);

module.exports = router;