import { User } from './user';

export interface PublicMessage {
  id: string;
  user: User;
  message: string;
  createdAt: Date;
}
