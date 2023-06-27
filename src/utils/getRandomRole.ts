import type { Role } from "../types";

export const getRandomRole = (): Role => {
  return Math.random() > 0.5 ? "Administrator" : "Standard";
};
