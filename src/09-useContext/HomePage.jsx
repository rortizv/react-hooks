import React from 'react';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

export const HomePage = () => {

  const {user} = useContext(UserContext);

  return (
    <>
        <h1>HomePage</h1>
        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
    </>
  )
}
