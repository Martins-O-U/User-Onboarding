import React from 'react';

const UsersList = ({ users }) => {
  return users.map(user => (
    <div key={user.id} className="user-list">
      <strong>Welcome {user.name},</strong> we sure would love a {user.role} in the team.
    </div>
  ));
};

export default UsersList;