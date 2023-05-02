'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppraisalSchema extends Schema {
  up () {
    this.create('appraisals', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('appraisals')
  }
}

module.exports = AppraisalSchema
