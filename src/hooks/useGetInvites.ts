import { useQuery } from '@tanstack/react-query';
import { Invites } from '../queries';

export const useGetAdminInvitesQuery = () =>
  useQuery({
    queryKey: ['adminInvites'],
    queryFn: Invites.getAdminInvites,
  });

export const useGetStandardInvitesQuery = () =>
  useQuery({
    queryKey: ['standardInvites'],
    queryFn: Invites.getStandardInvites,
  });
