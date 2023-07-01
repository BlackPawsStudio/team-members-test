import clsx from 'clsx';
import { useState } from 'react';
import type { InviteType, TeamMemberType } from '../../types';
import chevronRightPic from '../../assets/chevron_right.svg';

type ListItemProps =
  | {
      invite: InviteType;
    }
  | {
      member: TeamMemberType;
    };

export const ListItem = (props: ListItemProps) => {
  const [isActive, toggleActive] = useState(false);
  return (
    <li
      onClick={() => toggleActive(!isActive)}
      className={clsx(
        'team__list__item',
        'invite' in props && 'invite',
        'member' in props && 'member',
        isActive && 'active'
      )}
    >
      <span className="team__list__item__title">
        {'invite' in props && props.invite.phone}
        {'member' in props && `${props.member.user.name} ${props.member.user.lastName}`}
      </span>
      {'invite' in props && <span className="team__list__item__invite-flag">Invited</span>}
      <img
        src={chevronRightPic}
        alt="chevron"
        className={clsx('team__list__item__chevron', isActive && 'active')}
      />
      <div className={clsx('team__list__item__content', isActive && 'active')}>Content</div>
    </li>
  );
};
