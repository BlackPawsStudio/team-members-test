import { faker } from "@faker-js/faker";
import type { Invite } from "../types";
import { getRandomRole } from "../utils";

const getRandomInvites = (): Invite[] => {
  return new Array(8).fill(0).map(() => {
    return {
      id: faker.number.int(),
      phone: faker.phone.number("+### #######"),
      role: getRandomRole(),
    };
  });
};

export const randomInvites = getRandomInvites();
