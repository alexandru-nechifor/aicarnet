export interface User {
  id?: number | undefined;
  username: string;
  email: string;
  password: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt: string;
  progress?: any;
  profilePicture?: any;
}
