"use strict";

class RegisterRequest {
  get validateAll() {
    return true;
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      status: "error",
      message: errorMessages[0].message,
    });
  }

  get rules() {
    return {
      username: "required",
      email: "required|email|unique:users",
      password: "required|confirmed|min:6|max:24",
    };
  }

  get messages() {
    return {
      "username.required": "You must provide a name field",
      "email.required": "You must provide a email field",
      "email.email": "Invalid email address",
      "email.unique": "Email already registered!",
      "password.confirmed": "Password Confirmation not same",
      "password.required": "You must provide a password field",
    };
  }
}

module.exports = RegisterRequest;
