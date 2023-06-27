import { faker } from "@faker-js/faker";
import type { UserShortData } from "../types";

const createRandomUser = (): UserShortData => {
  return {
    id: faker.number.int(),
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number("+### #######"),
    email: faker.internet.email(),
  };
};

export const randomUsers = new Array(10).fill(0).map(() => createRandomUser());
