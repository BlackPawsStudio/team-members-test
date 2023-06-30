import { adminMembers, standardMembers } from '../data';
import type { TeamMemberType } from '../types';

const timeout = 1000;

export const Members = {
  getAdminMembers(): Promise<TeamMemberType[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(adminMembers), timeout);
      } catch (e) {
        setTimeout(() => reject(e), timeout);
      }
    });
  },

  getStandardMembers(): Promise<TeamMemberType[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(standardMembers), timeout);
      } catch (e) {
        setTimeout(() => reject(e), timeout);
      }
    });
  },
};
