import { List } from './components/List';
import { ListSection } from './components/ListSection';
import { Spinner } from './components/Spinner';
import {
  useGetAdminInvitesQuery,
  useGetAdminMembersQuery,
  useGetStandardInvitesQuery,
  useGetStandardMembersQuery,
} from './hooks';
import adminPic from './assets/admin_pan.svg';
import standardPic from './assets/standard_pan.svg';

const App = () => {
  const { data: adminInvitesData, isLoading: isAdminInvitesLoading } = useGetAdminInvitesQuery();
  const { data: adminMembersData, isLoading: isAdminMembersLoading } = useGetAdminMembersQuery();

  const { data: standardInvitesData, isLoading: isStandardInvitesLoading } =
    useGetStandardInvitesQuery();
  const { data: standardMembersData, isLoading: isStandardMembersLoading } =
    useGetStandardMembersQuery();

  return (
    <div className="team">
      {!(isAdminMembersLoading && isAdminInvitesLoading) && adminMembersData && adminInvitesData ? (
        <ListSection>
          <ListSection.Title text="Administrators" icon={adminPic} />
          <List members={adminMembersData} invites={adminInvitesData} />
        </ListSection>
      ) : (
        <Spinner />
      )}
      {!(isStandardMembersLoading && isStandardInvitesLoading) &&
      standardMembersData &&
      standardInvitesData ? (
        <ListSection>
          <ListSection.Title text="Standard Users" icon={standardPic} />
          <List members={standardMembersData} invites={standardInvitesData} />
        </ListSection>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
