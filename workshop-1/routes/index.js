'use strict';

// Setup express Router
const express = require('express');
const router = express.Router();

const api = require('../api');

// Define the Dashboard entry point: index.html
router.get('/', function (req, res, next) {
	res.render('index', function (err, html) {
		res.send(html);
	});
});

router.get('/robots', api.robots.getAll);

module.exports = router;
