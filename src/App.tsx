import { List } from './components/List';
import { ListSection } from './components/ListSection';
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
      {!(isAdminMembersLoading && isAdminInvitesLoading) && adminMembersData && adminInvitesData ? (
        <ListSection>
          <ListSection.Title isAdmin />
          <List members={adminMembersData} invites={adminInvitesData} />
        </ListSection>
      ) : (
        <Spinner />
      )}
      {!(isStandardMembersLoading && isStandardInvitesLoading) &&
      standardMembersData &&
      standardInvitesData ? (
        <ListSection>
          <ListSection.Title />
          <List members={standardMembersData} invites={standardInvitesData} />
        </ListSection>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
