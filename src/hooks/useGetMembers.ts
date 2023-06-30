import { useQuery } from '@tanstack/react-query';
import { Members } from '../queries';

export const useGetAdminMembersQuery = () =>
  useQuery({
    queryKey: ['adminMembers'],
    queryFn: Members.getAdminMembers,
  });

export const useGetStandardMembersQuery = () =>
  useQuery({
    queryKey: ['standardMembers'],
    queryFn: Members.getStandardMembers,
  });
