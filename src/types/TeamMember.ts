import { Role, UserShortData } from ".";

export type Status =
  | "request"
  | "pending"
  | "approved"
  | "declined"
  | "invited";

export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

export const isTeamMember = (object: unknown): object is TeamMember => {
  if (
    object &&
    typeof object === "object" &&
    "id" in object &&
    "status" in object &&
    "user" in object &&
    "role" in object &&
    Object.keys(object).length === 4
  )
    return true;
  return false;
};
