'use strict';

const Manufacturer = require('./Manufacturer');

const manufacturers = {
	bostonDynamics: new Manufacturer('Boston Dynamics'),
	cylons: new Manufacturer('Cylons')
};

module.exports = {
	manufacturers
};