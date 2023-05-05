"use strict";

class CreateSalary {
  get rules() {
    return {
      // validation rules
      salary_amount: "required",
      salary_type: "required",
      salary_user_id: "required",
      
      salary_total: "required",
    };
  }

  get messages() {
    return {
      "salary_amount.required": "You must provide a salary amount.",
      "salary_type.required": "You must provide a salary type.",
      "salary_user_id.required": "You must provide a user id.",
      "salary_total.required": "You must provide a salary total.",
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
