"use strict";
const Skill = use("App/Models/Skill");

class SkillController {
  //create skill
  async store({ request, response }) {
    try {
      const skill = await Skill.create(
        request.only(["skill_name", "skill_description", "skill_mastery"])
      );
      return response.json(skill);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem creating the skill, please try again later.",
      });
    }
  }

  //get all skills
  async index({ request, response }) {
    try {
      const skills = await Skill.all();
      return response.json(skills);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the skills, please try again later.",
      });
    }
  }

  //get skill by id
  async show({ request, response }) {
    try {
      const skill = await Skill.find(request.params.skill_id);
      if (!skill) {
        return response.status(404).send({
          error: "No skill found",
        });
      }
      return response.json(skill);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the skill, please try again later.",
      });
    }
  }

  //update skill
  async update({ request, response }) {
    try {
      const skill = await Skill.find(request.params.skill_id);
      if (!skill) {
        return response.status(404).send({
          error: "No skill found",
        });
      }
      skill.merge(
        request.only(["skill_name", "skill_description", "skill_mastery"])
      );
      await skill.save();
      return response.json(skill);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem updating the skill, please try again later.",
      });
    }
  }

  //delete skill
  async delete({ request, response }) {
    try {
      const skill = await Skill.find(request.params.skill_id);
      if (!skill) {
        return  response.status(404).send({
          error: "No skill found",
        });
      }
      await skill.delete();
      return response.json({ message: "Skill deleted!" });
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem deleting the skill, please try again later.",
      });
    }
  }
}

module.exports = SkillController;
