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
  Route.get("roles/:role_id", "RoleController.show").middleware([
    "auth:jwt",
    "checkUserRolePermissions:Administrator,Project Manager,Project Leader, Human Resources, Collaborator",
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
  Route.delete("users/projects", "UserController.deleteProject");
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

//Salary routes
Route.group(() => {
  Route.post("salary", "SalaryController.store").validator("CreateSalary");
  Route.get("salaries", "SalaryController.index");
  Route.get("salary/:salary_id", "SalaryController.show");
  Route.put("updateSalary/:salary_id", "SalaryController.update").validator(
    "UpdateSalary"
  );
  Route.delete("deleteSalary/:salary_id", "SalaryController.destroy");
}).prefix("api");

//Risk routes
Route.group(() => {
  Route.post("risk", "RiskController.store").validator("CreateRisk");
  Route.get("risks", "RiskController.index");
  Route.get("risk/:risk_id", "RiskController.show");
  Route.put("updateRisk/:risk_id", "RiskController.update").validator(
    "UpdateRisk"
  );
  Route.delete("deleteRisk/:risk_id", "RiskController.destroy");
}).prefix("api");

//Skill routes
Route.group(() => {
  Route.post("skill", "SkillController.store").validator("CreateSkill");
  Route.get("skills", "SkillController.index");
  Route.get("skill/:skill_id", "SkillController.show");
  Route.put("updateSkill/:skill_id", "SkillController.update").validator(
    "UpdateSkill"
  );
  Route.delete("deleteSkill/:skill_id", "SkillController.destroy");
  Route.get("skillName/:skill_name", "SkillController.getSkillByName");
  Route.post("assignSkill", "SkillController.assignSkill");
  Route.get("userSkills/:skill_user_id", "SkillController.getUserSkills");
}).prefix("api");

//Suggestion routes
Route.group(() => {
  Route.post("suggestion", "SuggestionController.sendSuggestionEmail");
}).prefix("api");

//Training routes
Route.group(() => {
  Route.post("training", "TrainingController.store").validator(
    "CreateTraining"
  );
  Route.get("trainings", "TrainingController.index");
  Route.get("training/:training_id", "TrainingController.show");
  Route.put(
    "updateTraining/:training_id",
    "TrainingController.update"
  ).validator("UpdateTraining");
  Route.delete("deleteTraining/:training_id", "TrainingController.destroy");
  Route.post("training/user", "TrainingController.assingTraining");
}).prefix("api");
