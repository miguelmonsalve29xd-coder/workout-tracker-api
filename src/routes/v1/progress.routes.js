// src/routes/v1/progress.routes.js

const express = require('express');
const router = express.Router();
const progressController = require('../../controllers/progress.controller');

// GET /api/v1/progress
router.get('/', progressController.getAllProgress);

module.exports = router;