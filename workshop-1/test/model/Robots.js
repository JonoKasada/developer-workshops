'use strict';

const expect = require('expect.js');
const _ = require('lodash');

const robots = require('../../model').robots;
const Robot = require('../../model').Robot;
const Manufacturer = require('../../model').Manufacturer;

/**
 * Here we are describing the behaviour of a module or some encapsulated piece of a module. But because
 * a the behaviour is complex, generally consisting of more than a single aspect or requirement, we provide
 * multiple descriptive functions inside which test specific parts of the behaviour.
 */
describe('robots.js', function() {

	/**
	 * Here we are describing what is perhaps a business requirement: in this case, that we should
	 * always have at least 4 robots in our robot army.
	 */
	it('should expose a robot army that has at least 4 robots', function() {

		let robotArmy = robots.robotArmy;

		expect(robotArmy.length).to.equal(4);

	});

	it('should expose a robot army that has more GOOD robots than EVIL robots', function() {

		let robotArmy = robots.robotArmy;
		let result = Robot.isArmyMoreGoodThanEvil(robotArmy);

		expect(result).to.equal(true);

	});

	it('should expose a robot army that contains at least 3 robots manufactured by Boston Dynamics', function() {

		throw new Error('not yet implemented');

	});

	it('should expose a robot army that contains', function() {

	});

});