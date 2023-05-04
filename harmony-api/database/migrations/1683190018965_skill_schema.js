"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SkillSchema extends Schema {
  up() {
    this.create("skills", (table) => {
      table.increments("skill_id");
      table.string("skill_name", 255).notNullable();
      table.string("skill_description", 255).notNullable();
      table.string("skill_mastery").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("skills");
  }
}

module.exports = SkillSchema;
