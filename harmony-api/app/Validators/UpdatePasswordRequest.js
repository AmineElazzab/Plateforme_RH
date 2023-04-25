"use-strict";

"use strict";

class UpdatePasswordRequest {
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
      email: "required|email",
      password: "required|confirmed|min:6|max:24",
    };
  }

  get messages() {
    return {
      "email.required": "You must provide a email field",
      "email.email": "Invalid email address",
      "password.confirmed": "Password Confirmation not same",
      "password.required": "You must provide a password field",
    };
  }
}

module.exports = UpdatePasswordRequest;
