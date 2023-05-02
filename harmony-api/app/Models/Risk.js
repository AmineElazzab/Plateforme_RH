"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Risk extends Model {
  projects() {
    return this.belongsTo("App/Models/Project");
  }
}

module.exports = Risk;
