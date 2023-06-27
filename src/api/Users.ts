import type { TeamMember, Invite } from "../types";
import { randomInvites, randomTeamMembers } from "../data";

const timeout = 1000;

export const Users = {
  getUsers(): Promise<TeamMember[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(randomTeamMembers), timeout);
      } catch (e) {
        setTimeout(() => reject(e), timeout);
      }
    });
  },

  getInvites(): Promise<Invite[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(randomInvites), timeout);
      } catch (e) {
        setTimeout(() => reject(e), timeout);
      }
    });
  },
};
