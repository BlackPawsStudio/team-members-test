import { useQuery } from "@tanstack/react-query";
import { Users } from "./../api";
import { separateByRole } from "../helpers";

export const useGetTeamMembersQuery = () =>
  useQuery({
    queryKey: ["teamMembers"],
    queryFn: Users.getUsers,
    select: separateByRole,
  });
