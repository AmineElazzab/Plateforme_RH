'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('taskName ', 255).notNullable()
      table.string('taskDescription', 255).notNullable()
      table.string('feature', 255).notNullable()
      table.string('taskType', 255).notNullable()
      table.date('startDate').notNullable()
      table.date('endDate').notNullable()
      table.integer('proirity').notNullable()
      table.integer('criticity').notNullable()
      table.integer('estimatedWorkload ').notNullable()
      table.string('assigned_to').notNullable()
      // table.enum('current_status ').notNullable()
      table.string('taskTree').notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
