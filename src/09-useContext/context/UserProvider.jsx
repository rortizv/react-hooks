import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//   id: 1,
//   username: 'wayne001',
//   email: 'manager@wayneenterprises.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
        { children }
    </UserContext.Provider>
  )
}
