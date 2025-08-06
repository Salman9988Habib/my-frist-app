import React from 'react';

const UserCard = ({ name, role }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '12px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;