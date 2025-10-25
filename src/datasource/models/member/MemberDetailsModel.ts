export interface MemberDetailsModel {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;
  birthdate: string; // ISO date string (YYYY-MM-DD)
  address: string;
  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo?: string | null;
  emergencyContactPerson?: string | null;
  relationshipToContactPerson?: string | null;
  departmentId?: number | null;
  positionId?: number | null;
  baptismOfficiant: string;
  baptismOfficiantId: number;
  baptismDate: string; // ISO date string
  joinDate: string; // ISO date string
  active: boolean;
}