"use strict";
const User = use("App/Models/User");

class UserController {
  async index({ request, response }) {
    const page = 1;
    const limit = 5;
    const users = await User.query().paginate(page, limit);
    return response.json(users);
  }
}

module.exports = UserController;
