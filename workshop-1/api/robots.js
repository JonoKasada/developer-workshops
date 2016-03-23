'use strict';

const _ = require('lodash');

const models = require('../model');

const Robot = models.Robot;
const robots = models.robots;
const robotArmy = robots.robotArmy;

/**
 * Fetches all robots and returns these as a json array.
 *
 * @param {Request} req The express Request object.
 * @param {Response} res The express Response object.
 * @param {function} next The next function to call.
 */
function getAll(req, res, next) {
	res.status(200).json(robotArmy);
}

module.exports = {
	getAll
};