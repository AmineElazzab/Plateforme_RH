"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SalarySchema extends Schema {
  up() {
    this.create("salaries", (table) => {
      table.increments("salary_id");
      table.integer("salary_amount").notNullable();
      table.integer("salary_type").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users");

      table.integer("salary_total").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("salaries");
  }
}

module.exports = SalarySchema;
