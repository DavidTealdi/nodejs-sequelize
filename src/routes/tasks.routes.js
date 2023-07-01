const { Router } =  require('express')

const { getTasks, createTask, updateTasks, deleteTasks, getTask} = require('../controllers/task.controllers')

const router = Router()


router.get('/tasks/:id', getTask)

router.get('/tasks', getTasks)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTasks)

router.delete('/tasks/:id', deleteTasks)

module.exports = router