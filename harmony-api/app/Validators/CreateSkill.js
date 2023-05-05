"use strict";

class CreateSkill {
  get rules() {
    return {
      // validation rules
      skill_name: "required",
      skill_description: "required|max:200",
      skill_mastery: "required",
    };
  }

  get messages() {
    return {
      "skill_name.required": "You must provide a skill name.",
      "skill_description.required": "You must provide a skill description.",
      "skill_mastery.required": "You must provide a skill mastery.",
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

module.exports = CreateSkill;
