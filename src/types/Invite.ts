import { Role } from ".";

export interface Invite {
  id: number;
  phone: string;
  role: Role;
}

export const isInvite = (object: unknown): object is Invite => {
  if (
    object &&
    typeof object === "object" &&
    "id" in object &&
    "phone" in object &&
    "role" in object &&
    Object.keys(object).length === 3
  )
    return true;
  return false;
};
