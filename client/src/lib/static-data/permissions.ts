interface PermissionsProps {
  [key: string]: boolean;
}
interface PermissionsNameProps {
  [key: string]: string;
}

const PERMISSIONS: PermissionsProps = {

  GET_PROJECTS: false,
  SHOW_PROJECT: false,
  POST_PROJECT: false,
  UPDATE_PROJECT: false,
  DELETE_PROJECT: false,
  UPDATE_PROJECT_ATTACHMENTS: false,
  POST_CUSTOM_PROJECT_FIELD: false,
  UPDATE_CUSTOM_PROJECT_FIELD: false,
  DELETE_CUSTOM_PROJECT_FIELD: false,
  ASSIGN_PROJECT: false,

  GET_ACTIVITY_LOGS: false,
  POST_ACTIVITY_LOG: false,
  SHOW_ACTIVITY_LOG: false,

  POST_ROLE: false,
  GET_ROLES: false,
  SHOW_ROLE: false,
  UPDATE_ROLE: false,
  DELETE_ROLE: false,

  POST_TASK: false,
  GET_TASKS: false,
  SHOW_TASK: false,
  UPDATE_TASK_ATTACHMENTS: false,
  DELETE_TASK: false,

  POST_LOG: false,
  GET_LOGS: false,

  GET_PERMISSIONS: false,

  POST_USER: false,

 
};

const PERMISSIONS_NAMES: PermissionsNameProps = {
  GET_PROJECTS: "See all projects",
  SHOW_PROJECT: "See details of one project",
  POST_PROJECT: "Create a new project",
  UPDATE_PROJECT: "Update or edit a project",
  DELETE_PROJECT: "Delete a project",
  UPDATE_PROJECT_ATTACHMENTS: "update attachments of a project",
  POST_CUSTOM_PROJECT_FIELD: "Create new fields for a project",
  UPDATE_CUSTOM_PROJECT_FIELD: "Update new fields for a project",
  DELETE_CUSTOM_PROJECT_FIELD: "Delete new fields for a project",
  ASSIGN_PROJECT: "Assign a project to a specific user",

  POST_TASK: "Create a new task",
  GET_TASKS: "See the list of all tasks",
  SHOW_TASK: "See details of one task",
  UPDATE_TASK_ATTACHMENTS: "Upadat attachement of a task",
  DELETE_TASK: "Delete a task",

  GET_ACTIVITY_LOGS: 'See list of activities (to do, in progress, done...)',
  POST_ACTIVITY_LOG: 'Create an activity (to do, in progress, done...)',
  SHOW_ACTIVITY_LOG: "See details of one activity (to do, in progress, done...)'",

  POST_ROLE: "Create a Role",
  GET_ROLES: "See all roles",
  UPDATE_ROLE: "Update a role",
  SHOW_ROLE: "Show a role",
  DELETE_ROLE: "Delete a role",

  GET_PERMISSIONS: "See list of permissions",
  POST_USER: "Create new user",
};
export { PERMISSIONS, PERMISSIONS_NAMES };
