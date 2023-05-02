'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuggestionSchema extends Schema {
  up () {
    this.create('suggestions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('suggestions')
  }
}

module.exports = SuggestionSchema
