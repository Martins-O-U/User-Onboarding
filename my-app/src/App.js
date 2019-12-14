import React, {useState, useEffect} from 'react';
import './App.css';
import UserForm from './Form';
import UsersList from './UsersList';


const initialFriendForm = {
  name: '',
  email: '',
  password: '',
  city: '',
};


function App() {
  const [userList, setUserList] = useState([]);
  const [serverError, setServerError] = useState('');

  return (
    <div className="App">
      <UserForm setUsers={setUserList} users={userList} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
