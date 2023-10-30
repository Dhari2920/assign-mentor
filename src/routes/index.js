const express = require('express')
const route = express.Router()

const StudentRoutes = require('./student')
route.use('/students',StudentRoutes)

const MentorRoutes = require('./mentor')
route.use('/mentors',MentorRoutes)

module.exports = route;