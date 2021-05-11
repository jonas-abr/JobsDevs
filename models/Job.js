const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {

    TITLE: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    SALARY: {
        type: Sequelize.STRING,
    },
    COMPANY: {
        type: Sequelize.STRING,
    },
    SALARY: {
        type: Sequelize.STRING,
    },
    EMAIL: {
        type: Sequelize.STRING,
    },
    NEW_JOB: {
        type: Sequelize.INTEGER,
    }
});

module.exports = job
