'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrainingSchema extends Schema {
  up () {
    this.create('trainings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('trainings')
  }
}

module.exports = TrainingSchema
