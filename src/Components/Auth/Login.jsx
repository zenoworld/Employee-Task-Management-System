import React, { useState } from 'react';

const Login = ({ handleUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    setError('');
    handleUser(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen flex-col w-screen justify-center items-center">
      <div className='mb-10'>
        <h1 className='font-bold text-3xl text-purple-700'>Employee Task Management System</h1>
      </div>
      <div className="border-2 rounded-xl px-10 py-20 border-purple-700">
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-label="Email"
            className="bg-transparent outline-none border-2 border-purple-700 px-5 py-3 rounded-full text-xl placeholder:text-zinc-500"
            type="email"
            placeholder="Enter Your Mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-label="Password"
            className="bg-transparent outline-none border-2 border-purple-700 px-5 py-3 rounded-full text-xl mt-3 placeholder:text-zinc-500"
            type="password"
            placeholder="Enter Your Password"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            disabled={!email || !password}
            className={`text-white cursor-pointer w-full bg-purple-700 font-semibold border-none outline-none px-5 py-2 rounded-full text-xl mt-7 
            ${!email || !password ? '' : ''}`}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
