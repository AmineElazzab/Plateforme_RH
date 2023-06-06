export enum Level {
  Beginner = "Beginner",
  Competent = "Competent",
  Proficient = "Proficient",
  Expert = "Expert",
}

export enum Salary {
  monthly = "monthly",
  weekly = "weekly",
  biweekly = "biweekly",
  semi_monthly = "semi-monthly",
  hourly = "hourly",
}

export enum Subtask {
  open = "open",
  assigned = "assigned",
  wip = "wip",
  fixed = "fixed",
}

export interface IDepartemnt {
  departement_id: number;
  departement_name: string;
  departement_description: string;
  departement_type: string;
}

export interface IRole {
  role_id: number;
  role_name: string;
  role_description: string;
}

export interface ISkill {
  skill_id: number;
  user_id: number;
  skill_name: string;
  skill_description: string;
  skill_level: Level;
}

export interface IAppraisal {
  appraisal_id: number;
  collaborator_id: number;
  appraisal_name: string;
  appraisal_type: string;
  appraisal_description: string;
}

export interface IAppraisal_criterias {
  app_criteria_id: number;
  appraisal_id: number;
  criteria_name: string;
  criteria_weight: string;
  criteria_description: string;
  criteria_target: string;
}

export interface IAppraisal_results {
  appraisal_result_id: number;
  appraisal_id: number;
  appraisal_result: string;
  appraisal_comment: string;
  appraisal_rating: string;
}

export interface IDocument {
  document_id: number;
  document_name: string;
  document_description: string;
  document_type: string;
  document_number: number;
  document_date: Date;
}

export interface ISalary {
  salary_id: number;
  salary_amount: number;
  salary_type: Salary;
  salary_user_id: number;
  salary_incentives: number;
  salary_total: number;
}

export interface ISubtask {
  subtask_id: number;
  subtask_title: string;
  subtask_description: string;
  subtask_status: Subtask;
  task_id: number;
}

export interface ISuggestion {
  suggestion_id: number;
  user_id: number;
  suggestion_name: string;
  suggestion_description: string;
}

export interface ITrainig {
  training_id: number;
  training_name: string;
  training_description: string;
  training_type: string;
  training_duration: string;
  training_link: string;
}

export interface IRisk {
  risk_id: number;
  risk_name: string;
  risk_description: string;
  impact_description: string;
  impact_level: number;
  probability_level: number;
  mitigation_plan: string;
}

export interface IPermission {
  permission_id: number;
  permission_name: string;
  permission_role_id: number;
  permission_description: string;
  permission_module: string;
  permission_action: string;
}
