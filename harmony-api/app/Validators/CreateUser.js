'use strict'

class CreateUser {
  get rules() {
    return {
      // validation rules
      fullname: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|min:6'
    }
  }

  get messages() {
    return {
      'fullname.required': 'You must provide a fullname.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'There is already an account with this email address.',
      'password.required': 'You must provide a password.',
      'password.min': 'Your password must be at least 6 characters long.'
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

module.exports = CreateUser
