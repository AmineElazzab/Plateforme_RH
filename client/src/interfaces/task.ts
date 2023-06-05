export enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
  critical = "critical",
}

export enum Complexity {
  low = "low",
  medium = "medium",
  high = "high",
}

export enum Status {
  todo = "todo",
  wip = "wip",
  pending = "pending",
  blocked = "blocked",
  ready_for_test = "ready for test",
  rework = "rework",
  done = "done",
}

export interface ITask {
  task_id: number;
  task_project_id: number;
  task_name: string;
  task_description: string;
  task_feature: string;
  task_type: string;
  task_start_day: Date;
  task_end_day: Date;
  task_priority: Priority;
  task_complexity: Complexity;
  task_status: Status.todo;
  task_rework: boolean;
  task_functional_test_status: boolean;
  task_progress: number;
  task_comments: string;
  task_estimated_workload: number;
  task_issue_status: string;
}
