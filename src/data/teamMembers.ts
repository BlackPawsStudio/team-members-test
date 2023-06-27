import { faker } from "@faker-js/faker";
import type { TeamMember, UserShortData } from "../types";
import { getRandomRole } from "../utils";
import { randomUsers } from ".";

const getRandomTeamMembers = (users: UserShortData[]): TeamMember[] => {
  return users.map((user) => {
    return {
      id: faker.number.int(),
      status: "request",
      role: getRandomRole(),
      user,
    };
  });
};

export const randomTeamMembers = getRandomTeamMembers(randomUsers);
