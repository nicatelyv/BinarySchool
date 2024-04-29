import React, { useState } from 'react';
import { useCreateUserMutation, useLazyGetUserByIdQuery, useGetAllUserQuery } from './redux/userApi';
import "./App.css"

function App() {
  const { data, isLoading, isError } = useGetAllUserQuery();
  const [getUserId, { data: userData }] = useLazyGetUserByIdQuery();
  const [createUser, { data: newUser }] = useCreateUserMutation();
  const [value, setValue] = useState('');
  const [newUserValue, setNewUserValue] = useState('');

  return (
    <div className="container">
      <h1>User Management System</h1>

      <div className="section">
        <h2>Get User by ID</h2>
        <input
          type="text"
          placeholder="Enter user ID"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => getUserId(value)}>Get User</button>
        <p>{userData?.firstName}</p>
      </div>

      <div className="section">
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Enter new user"
          value={newUserValue}
          onChange={(e) => setNewUserValue(e.target.value)}
        />
        <button onClick={() => createUser({ firstName: newUserValue })}>Add User: {newUserValue}</button>
        <p>{newUser?.firstName}</p>
      </div>

      <div className="section">
        <h2>User List</h2>
        {isLoading && <p>Loading ...</p>}
        {isError && <p>Error 404</p>}
        <ul>
          {data?.users.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;