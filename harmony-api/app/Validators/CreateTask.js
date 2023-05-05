"use strict";

class CreateTask {
  get rules() {
    return {
      // validation rules
      task_name: "required",
      task_description: "required",
      task_feature: "required",
      task_type: "required",
      task_start_date: "required",
      task_end_date: "required",
      task_priority: "required",
      task_complexity: "required",
    };
  }

  get messages() {
    return {
      "task_name.required": "You must provide a task name.",
      "task_description.required": "You must provide a task description.",
      "task_feature.required": "You must provide a task feature.",
      "task_type.required": "You must provide a task type.",
      "task_start_date.required": "You must provide a task start date.",
      "task_end_date.required": "You must provide a task end date.",
      "task_priority.required": "You must provide a task priority.",
      "task_complexity.required": "You must provide a task complexity.",
      "task_dev_status.required": "You must provide a task dev status.",
      "task_rework.required": "You must provide a task rework.",
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

module.exports = CreateTask;
