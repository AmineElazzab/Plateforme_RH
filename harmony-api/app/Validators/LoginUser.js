'use strict'

class LoginUser {
  get rules() {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'password.required': 'You must provide a password.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      status: 'error',
      message: errorMessages[0].message
    })
  }

  get validateAll() {
    return true
  }

  async authorize() {
    return true
  }
}

module.exports = LoginUser
