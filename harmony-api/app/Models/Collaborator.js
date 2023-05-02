'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Collaborator extends Model {
    static get primaryKey() {
        return 'id'
    }

    static get createdAtColumn() {
        return null
    }

    static get updatedAtColumn() {
        return null
    }
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Collaborator
