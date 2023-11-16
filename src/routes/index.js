const express = require('express')
const route = express.Router()

const StudentRoutes = require('./Student')
route.use('/students',StudentRoutes)

const MentorRoutes = require('./Mentor')
route.use('/mentors',MentorRoutes)

module.exports = route;