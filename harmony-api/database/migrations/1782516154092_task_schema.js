"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TaskSchema extends Schema {
  up() {
    this.create("tasks", (table) => {
      table.increments("task_id");
      table.string("task_title", 80).notNullable();
      table.string("task_description", 254).notNullable();
      table.string("feature", 254).notNullable();
      table.enu("complexity", ["low", "medium", "high"]).notNullable();
      table
        .enu("priority", ["low", "medium", "high", "critical"])
        .notNullable();
      table
        .enu("dev_status", [
          "to do",
          "wip",
          "pending",
          "blocked",
          "ready for test",
          "rework",
          "done",
        ])
        .notNullable();
      table.integer("task_progress").notNullable().defaultTo(0);
      table.date("task_start_date").notNullable();
      table.date("task_end_date").notNullable();
      table.integer("task_estimated_workload").notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("tasks");
  }
}

module.exports = TaskSchema;
