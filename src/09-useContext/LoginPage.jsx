import React from 'react'
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
        <h1>LoginPage</h1>
        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

        <button
          className='btn btn-outline-primary'
          onClick={() => {
            setUser({
              id: 3,
              username: 'logan',
              email: 'wolverine@marvel.com'
            })
          }
        }>
          Set User
        </button>
    </>
  )
}
