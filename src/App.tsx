import standardPic from './assets/standard_pan.svg';
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
        <ListSection isAdmin data={{ members: adminMembersData, invites: adminInvitesData }} />
      ) : (
        <Spinner />
      )}
      {!(isStandardMembersLoading && isStandardInvitesLoading) && standardMembersData && standardInvitesData ? (
        <ListSection data={{ members: standardMembersData, invites: standardInvitesData }} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
