"use strict";

class UpdateSalary {
  get rules() {
    return {
      // validation rules
      salary_amount: "required|number",
      salary_type: "required",
      salary_incentives: "required|number",
    };
  }

  get messages() {
    return {
      "salary_amount.required": "You must provide a salary amount.",
      "salary_amount.number": "Salary amount must be a number.",
      "salary_type.required": "You must provide a salary type.",
      "salary_incentives.required": "You must provide a salary incentives.",
      "salary_incentives.number": "Salary incentives must be a number.",
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

module.exports = UpdateSalary;
