export interface User {
  id?: number | undefined;
  username: string;
  email: string;
  password: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt: string;
  //eslint-disable-next-line
  progress?: any;
  //eslint-disable-next-line
  profilePicture?: any;
}
