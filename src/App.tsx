import { useGetTeamMembersQuery, useGetInvitesQuery } from './hooks';
import adminPic from './assets/admin_pan.svg';
import standardPic from './assets/standard_pan.svg';
import { Loader } from './components/Loader';
import { List } from './components/List';
import { useEffect, useState } from 'react';
import { ObjectWithRoleAndId } from './types';

const App = () => {
  const { data: members, isLoading: loadingMembers } = useGetTeamMembersQuery();
  const { data: invites, isLoading: loadingInvites } = useGetInvitesQuery();

  const [adminMembers, standardMembers] = members ?? [[], []];
  const [adminInvites, standardInvites] = invites ?? [[], []];

  const [adminsArr, setAdminsArr] = useState<ObjectWithRoleAndId[]>([]);
  const [standardArr, setStandardArr] = useState<ObjectWithRoleAndId[]>([]);

  useEffect(() => {
    setAdminsArr(adminMembers.concat(adminInvites));
    setStandardArr(standardMembers.concat(standardInvites));
  }, [adminMembers, adminInvites, standardMembers, standardInvites]);

  return (
    <div className="team">
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={adminPic} alt="admin" />
          <span>Administrators</span>
        </div>
        {!(loadingMembers || loadingInvites) ? <List teamDataArr={adminsArr} /> : <Loader />}
      </section>
      <section className="team__section">
        <div className="team__title">
          <img className="team__title__image" src={standardPic} alt="standard" />
          <span>Standard Users</span>
        </div>
        {!(loadingMembers || loadingInvites) ? <List teamDataArr={standardArr} /> : <Loader />}
      </section>
    </div>
  );
};

export default App;
