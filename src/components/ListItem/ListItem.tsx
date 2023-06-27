import clsx from 'clsx';
import { useState } from 'react';
import type { ObjectWithRoleAndId } from '../../types';
import { isInvite, isTeamMember } from '../../types';
import chevronRightPic from '../../assets/chevron_right.svg';

export const ListItem = ({ itemData }: { itemData: ObjectWithRoleAndId }) => {
  const [isActive, toggleActive] = useState(false);
  return (
    <li
      onClick={() => toggleActive(!isActive)}
      className={clsx(
        'team__list__item',
        isInvite(itemData) && 'invite',
        isTeamMember(itemData) && 'member',
        isActive && 'active'
      )}
    >
      <span className="team__list__item__title">
        {isInvite(itemData) && itemData.phone}
        {isTeamMember(itemData) && `${itemData.user.name} ${itemData.user.lastName}`}
      </span>
      {isInvite(itemData) && <span className="team__list__item__invite-flag">Invited</span>}
      <img
        src={chevronRightPic}
        alt="chevron"
        className={clsx('team__list__item__chevron', isActive && 'active')}
      />
      <div className={clsx('team__list__item__content', isActive && 'active')}>Content</div>
    </li>
  );
};
