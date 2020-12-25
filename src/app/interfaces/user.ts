export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  userRole: UserRole;
}

export interface UserRole {
  id: string;
  name: string;
}
