'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectManagerSchema extends Schema {
  up () {
    this.create('project_managers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('project_managers')
  }
}

module.exports = ProjectManagerSchema
