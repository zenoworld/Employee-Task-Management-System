import React, { useContext } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { UserContext } from './Context/UserContext';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const { user, loggedInUserData, handleUser } = useContext(UserContext);
  
  const authData = useContext(AuthContext); 

  return (
    <>
     
      {!user && <Login handleUser={(email, password) => handleUser(email, password, authData)} />}

      {user === 'admin' ? (
        <AdminDashboard userRole={user}/>
      ) : user === 'employee' ? (
        <EmployeeDashboard userRole={user} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
