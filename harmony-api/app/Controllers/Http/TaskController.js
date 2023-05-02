'use strict'

const Task = use('App/Models/Task')

class TaskController {

    //add task
    async addTask({ request, response }) {
        const taskInfo = request.only(['user_id', 'taskName', 'taskDescription', 'feature', 'taskType', 'startDate', 'endDate', 'proirity', 'criticity', 'estimatedWorkload', 'assigned_to', 'taskTree'])
        const task = new Task()
        task.user_id = taskInfo.user_id
        task.taskName = taskInfo.taskName
        task.taskDescription = taskInfo.taskDescription
        task.feature = taskInfo.feature
        task.taskType = taskInfo.taskType
        task.startDate = taskInfo.startDate
        task.endDate = taskInfo.endDate
        task.proirity = taskInfo.proirity
        task.complexity = taskInfo.complexity
        task.criticity = taskInfo.criticity
        task.estimatedWorkload = taskInfo.estimatedWorkload
        task.assigned_to = taskInfo.assigned_to
        task.taskTree = taskInfo.taskTree
        await task.save()
        return response.status(201).json(task)
    }

    //get all tasks
    async getAllTasks({ response }) {
        let tasks = await Task.all()
        return response.json(tasks)
    }

    //get task by id
    async getTaskById({ params, response }) {
        const task = await Task.find(params.id)
        return response.json(task)
    }

    //update task
    async updateTask({ params, request, response }) {
        const taskInfo = request.only(['user_id', 'taskName', 'taskDescription', 'feature', 'taskType', 'startDate', 'endDate', 'proirity', 'criticity', 'estimatedWorkload', 'assigned_to', 'taskTree'])
        const task = await Task.find(params.id)
        if (!task) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        task.user_id = taskInfo.user_id
        task.taskName = taskInfo.taskName
        task.taskDescription = taskInfo.taskDescription
        task.feature = taskInfo.feature
        task.taskType = taskInfo.taskType
        task.startDate = taskInfo.startDate
        task.endDate = taskInfo.endDate
        task.proirity = taskInfo.proirity
        task.criticity = taskInfo.criticity
        task.estimatedWorkload = taskInfo.estimatedWorkload
        task.assigned_to = taskInfo.assigned_to
        task.taskTree = taskInfo.taskTree
        await task.save()
        return response.status(200).json(task)
    }

    //delete task
    async deleteTask({ params, response }) {
        const task = await Task.find(params.id)
        if (!task) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        await task.delete()
        return response.status(204).json(null)
    }
}
 
module.exports = TaskController
