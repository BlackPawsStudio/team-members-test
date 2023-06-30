import adminPic from './assets/admin_pan.svg';
import standardPic from './assets/standard_pan.svg';
import { List } from './components/List';
import { Spinner } from './components/Spinner';
import {
  useGetAdminInvitesQuery,
  useGetAdminMembersQuery,
  useGetStandardInvitesQuery,
  useGetStandardMembersQuery,
} from './hooks';

const App = () => {
  const { data: adminInvitesData, isLoading: isAdminInvitesLoading } = useGetAdminInvitesQuery();
  const { data: adminMembersData, isLoading: isAdminMembersLoading } = useGetAdminMembersQuery();

  const { data: standardInvitesData, isLoading: isStandardInvitesLoading } =
    useGetStandardInvitesQuery();
  const { data: standardMembersData, isLoading: isStandardMembersLoading } =
    useGetStandardMembersQuery();

  return (
    <div className="team">
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={adminPic} alt="admin" />
          <span>Administrators</span>
        </div>
        {!(isAdminMembersLoading && isAdminInvitesLoading) &&
        adminMembersData &&
        adminInvitesData ? (
          <List members={adminMembersData} invites={adminInvitesData} />
        ) : (
          <Spinner />
        )}
      </section>
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={standardPic} alt="standard" />
          <span>Standard Users</span>
        </div>
        {!(isStandardMembersLoading && isStandardInvitesLoading) &&
        standardMembersData &&
        standardInvitesData ? (
          <List members={standardMembersData} invites={standardInvitesData} />
        ) : (
          <Spinner />
        )}
      </section>
    </div>
  );
};

export default App;
