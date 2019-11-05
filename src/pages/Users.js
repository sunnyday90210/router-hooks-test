import React from 'react';
import { useParams, useHistory } from 'react-router';

const Users = () => {
  const { firstname, lastname } = useParams();
  const history = useHistory();
  return (
    <div>
      <div>
        Users {firstname} {lastname}
      </div>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default Users;
