"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ApiAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    const apiToken = auth.getAuthHeader();
    if (!apiToken) {
      return response.status(401).send({
        error: "You are not logged in.",
      });
    }
    await next();
  }
}

module.exports = ApiAuth;
