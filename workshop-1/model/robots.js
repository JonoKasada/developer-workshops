'use strict';

const Robot = require('./Robot');
const manufacturers = require('./manufacturers');

const GOOD = true;
const EVIL = !GOOD;

let robotArmy = [
	new Robot(465, 'James', 'detailing Cars', GOOD, manufacturers.cylons),
    new Robot(666, 'K.Kasadashian', 'automating away the jobs of the pleb humans', EVIL, manufacturers.bostonDynamics),
    new Robot(808, 'Sharon', 'destroying innovative startups so that big business continues to dominate', EVIL, manufacturers.bostonDynamics),
    new Robot(101, 'George', 'keying people\'s cars on George St', EVIL, manufacturers.cylons)
];

module.exports = {
	robotArmy
};