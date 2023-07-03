import adminPic from '../../assets/admin_pan.svg';
import standardPic from '../../assets/standard_pan.svg';

export const ListSectionTitle = ({ isAdmin }: { isAdmin?: boolean }) => (
  <div className="team__title">
    <img className="team__title__image" src={isAdmin ? adminPic : standardPic} alt="admin" />
    <span>Administrators</span>
  </div>
);
