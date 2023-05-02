'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HumanResourcesSchema extends Schema {
  up () {
    this.create('human_resources', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('human_resources')
  }
}

module.exports = HumanResourcesSchema
