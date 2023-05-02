"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Salary extends Model {
  static get table() {
    return "salaries";
  }

  users() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Salary;
