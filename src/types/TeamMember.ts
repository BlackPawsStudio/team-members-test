import { Role, UserShortData } from '.';

export type Status = 'request' | 'pending' | 'approved' | 'declined' | 'invited';

export interface TeamMemberType {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}
