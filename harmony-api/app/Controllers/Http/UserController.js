'use strict'

const User = use('App/Models/User')

class UserController {
    async login({ auth, request }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)

        return 'Logged in successfully'
    }

    async register({ auth, request, response }) {
        const user = await User.create(
            request.only(['username', 'email', 'password'])
        )

        const token = await auth.generate(user)

        return response.json({
            message: 'Successfully created new user',
            data: token
        })
    }
}


module.exports = UserController
