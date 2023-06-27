import { useQuery } from "@tanstack/react-query";
import { Users } from "./../api";
import { separateByRole } from "../helpers";

export const useGetInvitesQuery = () =>
  useQuery({
    queryKey: ["invites"],
    queryFn: Users.getInvites,
    select: separateByRole,
  });
