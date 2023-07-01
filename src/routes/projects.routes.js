const { Router } = require('express')
const { getProjects, createProject, updateProject, deleteProject, getProject, getProjectTasks } = require('../controllers/proyects.controllers')

const router = Router()


router.get('/projects', getProjects)

router.get('/projects/:id', getProject)

router.post('/projects', createProject)

router.put('/projects/:id', updateProject)

router.delete('/projects/:id', deleteProject)


router.get('/projects/:id/tasks', getProjectTasks)

module.exports = router