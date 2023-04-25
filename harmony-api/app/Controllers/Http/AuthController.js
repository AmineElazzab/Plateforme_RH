"use strict";
const User = use("App/Models/User");

class AuthController {
  async register({ request, auth, response }) {
    try {
      const user = await User.create(
        request.only(["username", "email", "password"])
      );

      const token = await auth.generate(user);

      return response.json({
        status: "success",
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      console.error(error);

      return response.status(500).send({
        error: "There was a problem creating the user, please try again later.",
      });
    }
  }

  async login({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      const token = await auth.attempt(email, password);
      const user = await User.findBy("email", email);

      if (!user) {
        return response.status(404).send({
          error: "User not found",
        });
      }

      return response.json({
        status: "success",
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      console.error(error);

      return response.status(500).send({
        error: "There was a problem logging in, please try again later.",
      });
    }
  }

  async updatePassword({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      const user = await User.findBy("email", email);

      if (!user) {
        return response.status(404).send({
          error: "User not found",
        });
      }

      user.password = password;
      await user.save();

      const token = await auth.generate(user);

      return response.json({
        status: "success",
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      console.error(error);

      return response.status(500).send({
        error:
          "There was a problem updating the password, please try again later.",
      });
    }
  }

  async me({ auth, response }) {
    return response.json({
      status: "success",
      data: auth.user,
    });
  }
}

module.exports = AuthController;
