import adminPic from './assets/admin_pan.svg';
import standardPic from './assets/standard_pan.svg';
import { List } from './components/List';
import { useMemo } from 'react';
import { adminInvites, adminMembers, standardInvites, standardMembers } from './data';

const App = () => {
  const adminsArr = useMemo(() => adminMembers.concat(adminInvites), [adminMembers, adminInvites]);
  const standardArr = useMemo(
    () => standardMembers.concat(standardInvites),
    [standardMembers, standardInvites]
  );

  console.log(adminMembers, adminInvites, standardMembers, standardInvites);

  return (
    <div className="team">
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={adminPic} alt="admin" />
          <span>Administrators</span>
        </div>
        <List teamDataArr={adminsArr} />
      </section>
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={standardPic} alt="standard" />
          <span>Standard Users</span>
        </div>
        <List teamDataArr={standardArr} />
      </section>
    </div>
  );
};

export default App;
