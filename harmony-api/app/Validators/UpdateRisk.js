"use strict";

class UpdtaeRisk {
  get rules() {
    return {
      // validation rules
      risk_name: "required",
      risk_description: "required",
      impact_description: "required",
      impact_level: "required",
      probability_level: "required",
      criticality_level: "required",
      mitigation_plan: "required",
    };
  }

  get messages() {
    return {
      "risk_name.required": "You must provide a risk name.",
      "risk_description.required": "You must provide a risk description.",
      "impact_description.required": "You must provide a impact description.",
      "impact_level.required": "You must provide a impact level.",
      "probability_level.required": "You must provide a probability level.",
      "criticality_level.required": "You must provide a criticality level.",
      "mitigation_plan.required": "You must provide a mitigation plan.",
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

module.exports = UpdtaeRisk;
