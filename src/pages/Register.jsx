import React, { useState } from 'react'
import { useAuth } from '../components/Context/authContext'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
const {register} = useAuth();
const navigate = useNavigate();
const location = useLocation();

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async(e) => {
e.preventDefault();
try {
  const response = await fetch("https://morentb.vercel.app/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username, email, password}),
  });
  if(response.ok) {
    const data = await response.json();
    register(data);
    toast.success("Registration Successful");
    const from = location.state?.from?.pathname || "/login";
    navigate(from, { replace: true });
  } else {
    const errorData = await response.json();
    toast.error( errorData.message || "Registration Failed, Please Check Credentials");
  }
} catch (error) {
  console.log("Error", error)
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
      <input type="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder='Email'
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
        Register
      </button>
    </form>
  )
}

export default Register