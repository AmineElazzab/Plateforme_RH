"use strict";
const Skill = use("App/Models/Skill");
const User = use("App/models/User");

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

  //get skill by name
  async getSkillByName({ request, response }) {
    try {
      const skill = await Skill.findBy("skill_name", request.params.skill_name);
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

  //assing skill to user
  async assignSkillToUser({ request, response }) {
    try {
      const skill = await Skill.find(request.params.skill_id);
      if (!skill) {
        return response.status(404).send({
          error: "No skill found",
        });
      }
      const user = await User.find(request.params.user_id);
      if (!user) {
        return response.status(404).send({
          error: "No user found",
        });
      }
      await user.skills().attach([skill.skill_id]);
      return response.json({ message: "Skill assigned to user!" });
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem assigning the skill to the user, please try again later.",
      });
    }
  }

  //get all skills from user
  async getUserSkills({ request, response }) {
    try {
      const user = await User.find(request.params.user_id);
      if (!user) {
        return response.status(404).send({
          error: "No user found",
        });
      }
      const skills = await user.skills().fetch();
      return response.json(skills);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the skills, please try again later.",
      });
    }
  }
  

}

module.exports = SkillController;
