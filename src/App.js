import React from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <Header />
      <UserCard name="Salman Habib" role="Front End Developer" />
    </div>
  );
}

export default App;