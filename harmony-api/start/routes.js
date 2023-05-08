"use strict";

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

// Role routes
Route.group(() => {
  Route.post("roles", "RoleController.store")
    .validator("RoleRequest")
    .middleware(["auth:jwt", "checkUserRolePermissions:Administrator"]);

  Route.get("roles", "RoleController.index").middleware([
    "auth:jwt",
    "checkUserRolePermissions:Administrator,Project Manager,Project Leader",
  ]);

  Route.put("roles/:role_id", "RoleController.update").middleware([
    "auth:jwt",
    "checkUserRolePermissions:Administrator,Project Manager,Project Leader",
  ]);

  Route.delete("roles/:role_id", "RoleController.destroy").middleware([
    "auth:jwt",
    "checkUserRolePermissions:Administrator",
  ]);
}).prefix("api");

// Department routes
Route.group(() => {
  Route.post("departments", "DepartmentController.store").validator(
    "CreateDepartement"
  );

  Route.get("departments", "DepartmentController.index").middleware([
    "auth:jwt",
    "checkUserRolePermissions:Administrator, Human Resources",
  ]);
  Route.put("departments/:departement_id", "DepartmentController.update");

  Route.delete(
    "departments/:departement_id",
    "DepartmentController.destroy"
  ).middleware(["auth:jwt", "checkUserRolePermissions:Administrator"]);
}).prefix("api");

// User routes
Route.group(() => {
  Route.get("users", "UserController.index");
  Route.post("users/assign", "UserController.assignProject");
  Route.get("users/:user_id/projects", "UserController.getUserWithProjects");
  // Route.delete("users/projects", "UserController.deleteProject");
  // Route.put("users/:user_id/projects", "UserController.updateProject");
}).prefix("api");

//Project routes
Route.group(() => {
  Route.post("project", "ProjectController.store").validator("CreateProject");
  Route.get("projects", "ProjectController.index");
  Route.get("project/:project_id", "ProjectController.show");
  Route.put("update/:project_id", "ProjectController.update").validator(
    "UpdateProject"
  );
  Route.delete("delete/:project_id", "ProjectController.destroy");
}).prefix("api");

//Task routes
Route.group(() => {
  Route.post("task", "TaskController.store").validator("CreateTask");
  Route.get("tasks", "TaskController.index");
  Route.get("task/:task_id", "TaskController.show");
  Route.put("updateTask/:task_id", "TaskController.update").validator(
    "UpdateTask"
  );
  Route.delete("deleteTask/:task_id", "TaskController.destroy");
  Route.post("task/assign", "TaskController.assignTask");
}).prefix("api");

//Suggestion routes
Route.group(() => {
  Route.post("suggestion", "SuggestionController.sendSuggestionEmail");
}).prefix("api");
