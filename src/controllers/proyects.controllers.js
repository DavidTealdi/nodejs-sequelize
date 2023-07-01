const { Project } = require('../models/Project')
const { Task } = require('../models/Task')

const getProject = async (req, res) => {

    try {
        
        const { id } = req.params

        const oneProject = await Project.findOne({
            where: {
                id
            }
        })

        if (!oneProject) return res.status(404).json( { message: "Project does not exists" } )

        res.status(200).json(oneProject)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const getProjects = async (req, res) => {

    try {
        
        const projects = await Project.findAll()
    
        res.status(200).json(projects)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const createProject = async (req, res) => {

    try {

        const { name, priority, description} = req.body

        const newProject = await Project.create({
            name,
            description,
            priority
        })

        res.status(200).json(newProject)
        
    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const updateProject = async (req, res) => {

    try {
        
        const { id } = req.params
        const { name, priority, description } = req.body

        const project = await Project.findByPk(id)

        project.name = name
        project.priority = priority
        project.description = description

        await project.save()

        res.status(200).json(project)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
}

const deleteProject = async (req, res) => {
    
    try {
        
        const { id } = req.params

        await Project.destroy({
            where: {
                id
            }
        })
        
        res.sendStatus(204)

    } catch (error) {
        return res.status(500).json( { message: error.message } )
    }
    
}

const getProjectTasks = async (req, res) => {

    const { id } = req.params

    const tasks = await Task.findAll({
        where: {projectId: id}
    })

    res.status(200).json(tasks)
}

module.exports = {
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    getProjectTasks
}