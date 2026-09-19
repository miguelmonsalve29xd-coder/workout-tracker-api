const express = require('express');
const router = express.Router();
const exercisesController = require('../../controllers/exercises.controller');

router.get('/', exercisesController.getAllExercises);
router.get('/:id', exercisesController.getExerciseById);
router.post('/', exercisesController.createExercise);

module.exports = router;