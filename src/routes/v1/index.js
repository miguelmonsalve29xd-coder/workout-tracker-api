// src/routes/v1/index.js

const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.routes');
const workoutsRoutes = require('./workouts.routes');

router.use('/users', usersRoutes);
router.use('/workouts', workoutsRoutes);

module.exports = router;