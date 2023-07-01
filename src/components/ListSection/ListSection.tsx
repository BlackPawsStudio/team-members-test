import { InviteType, TeamMemberType } from '~/types';
import { List } from '../List/List';
import adminPic from '../../assets/admin_pan.svg';
import standardPic from '../../assets/standard_pan.svg';

interface ListSectionProps {
  isAdmin?: boolean;
  data: {
    members: TeamMemberType[];
    invites: InviteType[];
  };
}

export const ListSection = ({ isAdmin, data }: ListSectionProps) => {
  return (
    <section className="team__section">
      <ListSection.Title isAdmin={isAdmin} />
      <List members={data.members} invites={data.invites} />
    </section>
  );
};

ListSection.Title = ({ isAdmin }: { isAdmin?: boolean }) => (
  <div className="team__title">
    <img className="team__title__image" src={isAdmin ? adminPic : standardPic} alt="admin" />
    <span>Administrators</span>
  </div>
);
