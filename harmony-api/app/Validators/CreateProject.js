"use strict";

class CreateProject {
  get rules() {
    return {
      // validation rules
      project_name: "required|project_name|unique:projects ",
      project_description: "required",
      project_priority: "required|number",
      project_start_date: "required",
      project_end_date: "required",
      project_type: "required",
    };
  }

  get messages() {
    return {
      "project_name.required": "You must provide a project name.",
      "project_name.unique": "This project name already exists.",
      "project_description.required": "You must provide a project description.",
      "project_priority.required": "You must provide a project priority.",
      "project_priority.number": "Project priority must be a number.",
      "project_start_date.required": "You must provide a project start date.",
      "project_end_date.required": "You must provide a project end date.",
      "project_type.required": "You must provide a project type.",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      status: "error",
      message: errorMessages[0].message,
    });
  }

  get validateAll() {
    return true;
  }

  async authorize() {
    return true;
  }
}

module.exports = CreateProject;
