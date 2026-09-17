const express = require('express');
const router = express.Router();

//importar versiones de ruta 
const v1Routes = require('./v1');
const { version } = require('react');

// ruta base para informcaion de la api
router.get('/', (req, res) => {
    res.json({
        message: 'Workout Tracker API',
        versions: ['v1'],
        endpoints: {
            v1: '/api/v1'
        }
    });
});

module.exports = router;