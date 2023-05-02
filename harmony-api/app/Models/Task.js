"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Task extends Model {
  static get table() {
    return "tasks";
  }

  project() {
    return this.belongsTo("App/Models/Project");
  }

  subtasks() {
    return this.hasMany("App/Models/Subtask");
  }

  assignees() {
    return this.belongsToMany("App/Models/User").pivotModel(
      "App/Models/TaskAssignee"
    );
  }
  task_assignees() {
    return this.hasMany("App/Models/TaskAssignee");
  }
}

module.exports = Task;
