import { ObjectWithRoleAndId } from '../../types';
import { ListItem } from '../ListItem';

export const List = ({ teamDataArr }: { teamDataArr: ObjectWithRoleAndId[] }) => {
  return (
    <ul className="team__list">
      {teamDataArr.map((item) => (
        <ListItem key={item.id} itemData={item} />
      ))}
    </ul>
  );
};
