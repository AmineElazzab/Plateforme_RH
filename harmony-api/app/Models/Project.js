"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Project extends Model {
  static get primaryKey() {
    return "project_id";
  }
  departments() {
    return this.belongsTo("App/Models/Department");
  }

  tasks() {
    return this.hasMany("App/Models/Task");
  }

  project_managers() {
    return this.belongsTo("App/Models/ProjectManager");
  }

  project_leaders() {
    return this.belongsTo("App/Models/ProjectLeader");
  }
  users() {
    return this.belongsToMany("App/Models/User").pivotModel(
      "App/Models/ProjectCollaborator"
    );
  }
}

module.exports = Project;
