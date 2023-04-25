'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.group
    (() => {
        Route.post('register', 'UserController.register').validator('CreateUser')
        Route.post('login', 'UserController.login').validator('LoginUser')
        Route.post('logout', 'UserController.logout')
        Route.post('refresh', 'UserController.refresh')
        Route.get('user', 'UserController.user').middleware('auth')
    }
    ).prefix('api/auth')

Route.group
    (() => {
        Route.get('/tasks', 'TaskController.getAllTasks')
        Route.get('/tasks/:id', 'TaskController.getTaskById')
        Route.post('/tasks', 'TaskController.addTask')
        Route.put('/tasks/:id', 'TaskController.updateTask')
        Route.delete('/tasks/:id', 'TaskController.deleteTask')
    }
    ).prefix('api/task')
