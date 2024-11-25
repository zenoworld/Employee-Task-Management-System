import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loggedInUserData, setLoggedInUserData] = useState(null); 

 
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    try {
      const parsedUser = JSON.parse(loggedInUser);
      if (parsedUser) {
        setUser(parsedUser.role);
        if (parsedUser.role === 'employee') {
          setLoggedInUserData(parsedUser.data);
        }
      }
    } catch (err) {
      console.error('Error parsing user data:', err);
      localStorage.removeItem('loggedInUser');
    }
  }, []);

 
  const handleUser = (email, password, authData) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employeeData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Employee data is unavailable');
    }
  };

  const logoutUser = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <UserContext.Provider
      value={{ user, loggedInUserData, handleUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
