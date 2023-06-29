import adminPic from './assets/admin_pan.svg';
import standardPic from './assets/standard_pan.svg';
import { List } from './components/List';
import { adminInvites, adminMembers, standardInvites, standardMembers } from './data';

const App = () => {
  return (
    <div className="team">
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={adminPic} alt="admin" />
          <span>Administrators</span>
        </div>
        <List members={adminMembers} invites={adminInvites} />
      </section>
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={standardPic} alt="standard" />
          <span>Standard Users</span>
        </div>
        <List members={standardMembers} invites={standardInvites} />
      </section>
    </div>
  );
};

export default App;
