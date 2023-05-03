"use strict";

const Task = use("App/Models/Task");

class TaskController {
  //create task
  async store({ request, response }) {
    try {
      const task = await Task.create(
        request.only([
          "task_project_id",
          "task_name",
          "task_description",
          "task_feature",
          "task_type",
          "task_start_date",
          "task_end_date",
          "task_priority",
          "task_complexity",
        ])
      );
      return response.json(task);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error: "There was a problem creating the task, please try again later.",
      });
    }
  }

  //get all tasks
  async index({ request, response }) {
    try {
      const tasks = await Task.all();
      return response.json(tasks);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the tasks, please try again later.",
      });
    }
  }

  //get task by id
  async show({ request, response }) {
    try {
      const task = await Task.find(request.params.task_id);
      if (!task) {
        return response.status(404).send({
          error: "No task found",
        });
      }
      return response.json(task);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the task, please try again later.",
      });
    }
  }

  //update task
  async update({ request, response }) {
    try {
      const task = await Task.find(request.params.task_id);
      if (!task) {
        return response.status(404).send({
          error: "No task found",
        });
      }
      // if the task status is to do progress is 0 % , else if task status is wip progress is 30 % else if , task status is ready for test progress is 60 % , else if task status is done progress is 100 %
      if (request.body.task_dev_status === "to do") {
        task.task_progress = 0;
      }
      if (request.body.task_dev_status === "wip") {
        task.task_progress = 30;
      }
      if (request.body.task_dev_status === "ready for test") {
        task.task_progress = 60;
      }
      if (request.body.task_dev_status === "done") {
        task.task_progress = 100;
      }
      task.task_project_id = request.body.task_project_id;
      task.task_name = request.body.task_name;
      task.task_description = request.body.task_description;
      task.task_feature = request.body.task_feature;
      task.task_type = request.body.task_type;
      task.task_start_date = request.body.task_start_date;
      task.task_end_date = request.body.task_end_date;
      task.task_priority = request.body.task_priority;
      task.task_complexity = request.body.task_complexity;
      task.task_dev_status = request.body.task_dev_status;

      await task.save();
      return response.json(task);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error: "There was a problem updating the task, please try again later.",
      });
    }
  }

  //delete task
  async destroy({ request, response }) {
    try {
      const task = await Task.find(request.params.task_id);
      if (!task) {
        return response.status(404).send({
          error: "No task found",
        });
      }
      await task.delete();
      return response.json({
        message: "Task deleted",
      });
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error: "There was a problem deleting the task, please try again later.",
      });
    }
  }
}

// async update({ request, response }) {
//   try {
//     const task = await Task.find(request.params.task_id);
//     if (!task) {
//       return response.status(404).send({
//         error: "No task found",
//       });
//     }
//     task.task_project_id = request.body.task_project_id;
//     task.task_name = request.body.task_name;
//     task.task_description = request.body.task_description;
//     task.task_feature = request.body.task_feature;
//     task.task_type = request.body.task_type;
//     task.task_start_date = request.body.task_start_date;
//     task.task_end_date = request.body.task_end_date;
//     task.task_priority = request.body.task_priority;
//     task.task_complexity = request.body.task_complexity;
//     task.task_dev_status = request.body.task_dev_status;
//     task.task_rework = request.body.task_rework;
//     task.task_functional_test_status =
//       request.body.task_functional_test_status;
//     task.task_progress = request.body.task_progress;
//     task.task_comments = request.body.task_comments;
//     task.task_estimated_workload = request.body.task_estimated_workload;
//     task.task_issue_status = request.body.task_issue_status;
//     await task.save();
//     return response.json(task);
//   } catch (error) {
//     console.error(error);
//     return response.status(500).send({
//       error: "There was a problem updating the task, please try again later.",
//     });
//   }
// }

// async addTask({ request, response }) {
//     const taskInfo = request.only(['user_id', 'taskName', 'taskDescription', 'feature', 'taskType', 'startDate', 'endDate', 'proirity', 'criticity', 'estimatedWorkload', 'assigned_to', 'taskTree'])
//     const task = new Task()
//     task.user_id = taskInfo.user_id
//     task.taskName = taskInfo.taskName
//     task.taskDescription = taskInfo.taskDescription
//     task.feature = taskInfo.feature
//     task.taskType = taskInfo.taskType
//     task.startDate = taskInfo.startDate
//     task.endDate = taskInfo.endDate
//     task.proirity = taskInfo.proirity
//     task.complexity = taskInfo.complexity
//     task.criticity = taskInfo.criticity
//     task.estimatedWorkload = taskInfo.estimatedWorkload
//     task.assigned_to = taskInfo.assigned_to
//     task.taskTree = taskInfo.taskTree
//     await task.save()
//     return response.status(201).json(task)
// }

// //get all tasks
// async getAllTasks({ response }) {
//     let tasks = await Task.all()
//     return response.json(tasks)
// }

// //get task by id
// async getTaskById({ params, response }) {
//     const task = await Task.find(params.id)
//     return response.json(task)
// }

// //update task
// async updateTask({ params, request, response }) {
//     const taskInfo = request.only(['user_id', 'taskName', 'taskDescription', 'feature', 'taskType', 'startDate', 'endDate', 'proirity', 'criticity', 'estimatedWorkload', 'assigned_to', 'taskTree'])
//     const task = await Task.find(params.id)
//     if (!task) {
//         return response.status(404).json({ data: 'Resource not found' })
//     }
//     task.user_id = taskInfo.user_id
//     task.taskName = taskInfo.taskName
//     task.taskDescription = taskInfo.taskDescription
//     task.feature = taskInfo.feature
//     task.taskType = taskInfo.taskType
//     task.startDate = taskInfo.startDate
//     task.endDate = taskInfo.endDate
//     task.proirity = taskInfo.proirity
//     task.criticity = taskInfo.criticity
//     task.estimatedWorkload = taskInfo.estimatedWorkload
//     task.assigned_to = taskInfo.assigned_to
//     task.taskTree = taskInfo.taskTree
//     await task.save()
//     return response.status(200).json(task)
// }

// //delete task
// async deleteTask({ params, response }) {
//     const task = await Task.find(params.id)
//     if (!task) {
//         return response.status(404).json({ data: 'Resource not found' })
//     }
//     await task.delete()
//     return response.status(204).json(null)
// }

module.exports = TaskController;
