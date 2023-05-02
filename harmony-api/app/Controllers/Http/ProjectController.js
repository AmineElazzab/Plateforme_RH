'use strict'

const Project = use('App/Models/Project')

class ProjectController {

    async store({ request, response }) {
        try {
            const project = await Project.create(
                request.only
                    (['project_name', 'project_description', 'project_priority', 'project_start_date', 'project_end_date', 'project_type'])
            );

            return response.json(project);
        } catch (error) {
            console.error(error);

            return response.status(500).send({
                error: "There was a problem creating the project, please try again later.",
            });
        }
    }

    async index({ request, response }) {
        try {
            const projects = await Project.all();

            return response.json(projects);
        } catch (error) {
            console.error(error);

            return response.status(500).send({
                error: "There was a problem retrieving the projects, please try again later.",
            });
        }
    }

    async show({ request, response }) {
        try {
            const project = await Project.find(request.params.project_id);
            if (!project) {
                return response.status(404).send({
                    error: "No project found",
                });
            }
            return response.json(project);
        } catch (error) {
            console.error(error);
            return response.status(500).send({
                error: "There was a problem retrieving the project, please try again later.",
            });
        }
    }

    async update({ request, response }) {
        try {
            const project = await Project.find(request.params.project_id);
            if (!project) {
                return response.status(404).send({
                    error: "No project found",
                });
            }
            project.project_name = request.body.project_name;
            project.project_description = request.body.project_description;
            project.project_priority = request.body.project_priority;
            project.project_start_date = request.body.project_start_date;
            project.project_end_date = request.body.project_end_date;
            project.project_type = request.body.project_type;
            await project.save();
            return response.json(project);
        } catch (error) {
            console.error(error);
            return response.status(500).send({
                error: "There was a problem updating the project, please try again later.",
            });
        }
    }

    async destroy({ request, response }) {
        try {
            const project = await Project.find(request.params.project_id);
            if (!project) {
                return response.status(404).send({
                    error: "No project found",
                });
            }
            await project.delete();
            return response.json({ message: "Project deleted" });
        } catch (error) {
            console.error(error);
            return response.status(500).send({
                error: "There was a problem deleting the project, please try again later.",
            });
        }
    }
}



module.exports = ProjectController
