'use strict';

const _ = require('lodash');

/**
 * The class Robot represents a basic model of a Robot
 */
class Robot {

	/**
	 * Creates a new Robot.
	 *
	 * @param {Number} id The identifier for the Robot.
	 * @param {string} name The name of the Robot. Everyone needs a name. Yes even Robots.
	 * @param {string} purpose What is my purpose.
	 * @param {boolean} isGood Whether I am EVIL or GOOD.
	 * @param {string} manufacturer The manufacturer.
	 */
	constructor(id, name, purpose, isGood, manufacturer) {
		this.id = id;
		this.name = name;
		this.purpose = purpose;
		this.type = isGood ? 'GOOD' : 'EVIL';
		this.manufacturer = manufacturer;
	}

	/**
	 * What do I do ?
	 */
	revealPurpose() {
		return 'I am responsible for ' + this.purpose;
	}

	/**
	 * Access your robot army and make sure it is doing more GOOD than EVIL.
	 *
	 * @param {Array.<Robot>} robotArmy The array of Robots to test the condition.
	 * @returns {boolean} true if the given robot army contains more GOOD robots than bad.
	 */
	static isArmyMoreGoodThanEvil(robotArmy) {
		let counts = {EVIL: 0, GOOD: 0};

		// this uses the utility library lodash; see: https://lodash.com/docs
		// here we reduce the array of robots to an object with keys for each of the GOOD and EVIL types
		// and a count of the corresponding occurrences within the array
		_.reduce(robotArmy, function (result, val) {
			_.forEach(result, function (v, key) {
				if (val.type.indexOf(key) > 0) {
					result[key]++;
				}
			});
			return result;
		}, counts);

		return counts.GOOD > counts.EVIL;
	}

	/**
	 * We only like Boston Dynamics, apparently.
	 *
	 * @param {Robot} robot The robot to check.
	 * @returns {boolean} true if the given robot was made by Boston Dynamics.
	 */
	static isMadeByBostonDynamics(robot) {
		let manufacturerName =  robot.manufacturer ? robot.manufacturer.name : '';
		return manufacturerName === 'Boston Dynamics';
	}
}

module.exports = Robot;
