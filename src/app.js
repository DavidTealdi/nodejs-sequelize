const express = require('express')
const projectsRoutes = require('./routes/projects.routes')
const taskRoutes = require('./routes/tasks.routes')

const app = express()

// middlewares
app.use(express.json())

app.use('/', projectsRoutes)
app.use('/', taskRoutes)

module.exports = app