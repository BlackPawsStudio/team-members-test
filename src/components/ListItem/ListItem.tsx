import clsx from 'clsx';
import { useState } from 'react';
import type { InviteType, TeamMemberType } from '../../types';
import chevronRightPic from '../../assets/chevron_right.svg';

interface ListItemProps {
  invite?: InviteType;
  member?: TeamMemberType;
}

export const ListItem = ({ invite, member }: ListItemProps) => {
  const [isActive, toggleActive] = useState(false);
  return (
    <li
      onClick={() => toggleActive(!isActive)}
      className={clsx(
        'team__list__item',
        invite && 'invite',
        member && 'member',
        isActive && 'active'
      )}
    >
      <span className="team__list__item__title">
        {invite && invite.phone}
        {member && `${member.user.name} ${member.user.lastName}`}
      </span>
      {invite && <span className="team__list__item__invite-flag">Invited</span>}
      <img
        src={chevronRightPic}
        alt="chevron"
        className={clsx('team__list__item__chevron', isActive && 'active')}
      />
      <div className={clsx('team__list__item__content', isActive && 'active')}>Content</div>
    </li>
  );
};
