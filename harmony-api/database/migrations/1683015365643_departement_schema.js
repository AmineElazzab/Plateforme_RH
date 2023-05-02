'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartementSchema extends Schema {
  up () {
    this.create('departements', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('departements')
  }
}

module.exports = DepartementSchema
