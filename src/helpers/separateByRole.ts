import { ObjectWithRoleAndId } from "../types";

export const separateByRole = <T extends ObjectWithRoleAndId>(array: T[]) => {
  if (!array) return [[], []];
  const adminItems: ObjectWithRoleAndId[] = [];
  const standardItems: ObjectWithRoleAndId[] = [];
  array.forEach(
    (item) =>
      (item.role === "Administrator" && adminItems.push(item)) ||
      (item.role === "Standard" && standardItems.push(item))
  );
  return [adminItems, standardItems];
};
