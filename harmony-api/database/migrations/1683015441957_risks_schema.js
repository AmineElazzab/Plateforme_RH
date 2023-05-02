'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RisksSchema extends Schema {
  up () {
    this.create('risks', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('risks')
  }
}

module.exports = RisksSchema
