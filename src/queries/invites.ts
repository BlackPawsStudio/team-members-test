import { adminInvites, standardInvites } from '../data';
import type { InviteType } from '../types';

const timeout = 1000;

export const Invites = {
  getAdminInvites(): Promise<InviteType[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(adminInvites), timeout);
      } catch (e) {
        setTimeout(() => reject(e), timeout);
      }
    });
  },

  getStandardInvites(): Promise<InviteType[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(standardInvites), timeout);
      } catch (e) {
        setTimeout(() => reject(e), timeout);
      }
    });
  },
};
