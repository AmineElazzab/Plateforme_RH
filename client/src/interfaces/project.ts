export enum EProjectMilestones {
  KickOff = "Kick-Off",
  PreStudyPhase = "Pre-Study Phase",
  StudyPhase = "Study Phase",
  BuildPhase = "Study Phase",
  ExecutionPhase = "Build Phase",
  RollOutPhase = "Roll-Out Phase",
}

export enum EProjectStatus {
  Open = "Open",
  Closed = "Closed",
}

export enum EProjectType {
  Internal = "Internal",
  External = "External",
}


export interface IProject {
  project_id: number;
  project_name: string;
  project_description: string;
  project_priority: number;
  project_start_date: string;
  project_end_date: string;
  project_milstones: EProjectMilestones;
  project_status: EProjectStatus;
  project_type: EProjectType;
  project_progress: number;
}