import { InviteType, TeamMemberType } from '../../types';
import { ListItem } from '../ListItem';

interface ListProps {
  members: TeamMemberType[];
  invites: InviteType[];
}

export const List = ({ members, invites }: ListProps) => {
  return (
    <ul className="team__list">
      {members.map((item) => (
        <ListItem key={item.id} member={item} />
      ))}
      {invites.map((item) => (
        <ListItem key={item.id} invite={item} />
      ))}
    </ul>
  );
};
