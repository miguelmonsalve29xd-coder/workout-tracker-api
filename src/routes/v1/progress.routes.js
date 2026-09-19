// src/routes/v1/progress.routes.js

const express = require('express');
const router = express.Router();
const progressController = require('../../controllers/progress.controller');

router.get('/', progressController.getAllProgress);
router.get('/:id', progressController.getProgressById);

module.exports = router;