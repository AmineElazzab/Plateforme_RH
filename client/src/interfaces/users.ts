export enum EUserStatus {
  Active = "active",
  Inactive = "inactive",
}


export interface IUser {
  user_id: number;
  email: string;
  password: string;
  user_fullname: string;
  user_phone: number;
  user_image: string;
  user_department_id: number;
  user_role_id: number;
  user_status: EUserStatus;
  user_workload: number;
  user_start_date: string;
}