
"use strict";


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

const Route = use("Route");

Route.on("/").render("welcome");

// Auth routes
Route.group(() => {
  Route.post("register", "AuthController.register").validator(
    "RegisterRequest"
  );
  Route.post("login", "AuthController.login").validator("LoginRequest");
  Route.post("update-password", "AuthController.updatePassword").validator(
    "UpdatePasswordRequest"
  );
}).prefix("api/auth");

// User routes
Route.group(() => {
  Route.get("users", "UserController.index");
}).prefix("api");

//Project routes
Route.group(() => {
  Route.post("project", "ProjectController.store").validator("CreateProject")
  Route.get("projects", "ProjectController.index")
  Route.get("project/:project_id", "ProjectController.show")
  Route.put("update/:project_id", "ProjectController.update").validator("UpdateProject")
  Route.delete("delete/:project_id", "ProjectController.destroy")
}
).prefix("api");

