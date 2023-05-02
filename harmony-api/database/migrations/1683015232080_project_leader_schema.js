'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectLeaderSchema extends Schema {
  up () {
    this.create('project_leaders', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('project_leaders')
  }
}

module.exports = ProjectLeaderSchema
