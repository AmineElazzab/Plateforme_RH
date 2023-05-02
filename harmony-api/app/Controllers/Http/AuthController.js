"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class AuthController {
  async register({ request, auth, response }) {
    try {
      const user = await User.create(
        request.only(["username", "email", "password"])
      );

      const token = await auth.generate(user);

      Object.assign(user, token);

      return response.json(user);
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

      const user = await User.findBy("email", email);

      if (!user) {
        return response.status(404).send({ error: "User not found" });
      }

      const isPasswordValid = await Hash.verify(password, user.password);

      if (!isPasswordValid) {
        return response.status(401).send({ error: "Invalid password" });
      }

      const token = await auth.generate(user);

      Object.assign(user, token);
      return response.json(user);
    } catch (error) {
      console.error(error);

      return response.status(500).send({ error: "Server error" });
    }
  }

  async updatePassword({ request, auth, response }) {
    const user = await auth.getUser();
    const { oldPassword, newPassword } = request.only([
      "oldPassword",
      "newPassword",
    ]);

    try {
      // Verify the old password matches
      await auth.attempt(user.email, oldPassword);

      // Update the password
      user.password = newPassword;
      await user.save();

      return response
        .status(200)
        .send({ message: "Password updated successfully." });
    } catch (error) {
      return response.status(401).send({ message: "Invalid credentials." });
    }
  }
}

module.exports = AuthController;
