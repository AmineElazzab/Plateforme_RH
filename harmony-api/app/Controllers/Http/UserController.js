"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");
const Project_User = use("App/Models/ProjectCollaborator");
const Project = use("App/Models/Project");

class UserController {
  async index({ request, response }) {
    const page = 1;
    const limit = 5;
    const users = await User.query().paginate(page, limit);
    return response.json(users);
  }

  // assign project to a user
  async assignProject({ request, response }) {
    const { project_id, user_id } = request.all();
    const project = await Project.find(project_id);
    if (!project) {
      return response.status(404).send({
        error: "This project does not exist.",
      });
    }
    // check if that project is already assigned to that user
    const projectUserExists = await Project_User.query()
      .where("project_id", project_id)
      .where("user_id", user_id)
      .fetch();
    if (projectUserExists.rows.length > 0) {
      return response.status(404).send({
        error: "This project is already assigned to that user",
      });
    }
    const projectUser = await Project_User.create({
      project_id,
      user_id,
    });

    return response.json(projectUser);
  }

  async getUserWithProjects({ params, response }) {
    try {
      const user = await User.query()
        .where("user_id", params.user_id)
        .with("projects")
        .fetch();
      return response.json(user);
    } catch (error) {
      return response.status(500).send({
        error:
          "There was a problem retrieving the user, please try again later.",
      });
    }
  }

  // update the project assigned to a user
  
}

module.exports = UserController;
