const { Task } = require('../models/Task')

const getTask = async (req, res) => {

    try {
        
        const { id } = req.params

        const oneTask = await Project.findOne({
            where: {
                id
            }
        })

        if (!oneTask) return res.status(404).json( { message: "Task does not exists" } )

        res.status(200).json(oneTask)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const getTasks = async (req, res) => {

    try {
        
        const tasks = await Task.findAll()
    
        res.status(200).json(tasks)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const createTask = async (req, res) => {

    try {

        const { name, dome, projectId } = req.body

        const newTask = await Task.create({
            name,
            dome,
            projectId
        })

        res.status(200).json(newTask)
        
    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const updateTasks = async (req, res) => {

    try {
        
        const { id } = req.params

        const task = await Task.findOne({
            where: { id }
        })

        task.set( req.boy )

        await task.save()

        res.status(200).json(task)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const deleteTasks = async (req, res) => {
    
    try {
        
        const { id } = req.params

        await Task.destroy({
            where: {
                id
            }
        })
        
        res.sendStatus(204)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
    
}


module.exports = {
    getTasks, 
    createTask,
    updateTasks,
    deleteTasks,
    getTask
}