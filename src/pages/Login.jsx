import React, { useState } from 'react'
import { useAuth } from '../components/Context/authContext'
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://morentb.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
      }
      );
      if(response.ok) {
        const data = await response.json();
        login(data);
        toast.success("Login Successful");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        const errorData = await response.json();
        toast.error( errorData.message || "Login Failed, Please Check Credentials");
      }
    } catch (error) {
      console.log("Login Error", error)
      toast.error("An unexpected error occured, Please try again later")
    }
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-screen w-full gap-6'>
      <input type="text" 
      value={username} 
      onChange={(e) => setUsername(e.target.value)} 
      placeholder='username'
      required 
      className='w-50% border-4 border-blue-900'
      />
      <input type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder='password'
      required 
      className='w-50% border-4 border-blue-900'
      />
      <button type="submit" className='bg-blue-900 px-8 py-2 rounded-full text-white'>
        Login
      </button>
    </form>
  )
}

export default Login