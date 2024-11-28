import React, { useState } from "react";
import { useAuth } from "../components/Context/authContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://morentb.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        register(data);
        const from = location.state?.from?.pathname || "/login";
        toast.success("Registration Successful", toastConfig);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 3000);
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Registration Failed, Please Check Credentials", toastConfig);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An unexpected error occured, Please try again later", toastConfig); 
    }};
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[50%] bg-cover bg-center h-[300px] md:h-screen bg-[url('https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
      <div className="flex items-center w-full md:w-[50%]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center min-h-[500px] md:h-screen w-full gap-6 md:gap-8 px-4 md:px-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
            Create Account
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full md:w-2/3 p-3 rounded-lg border-2 border-blue-200 focus:border-blue-900 focus:outline-none transition-all duration-300 hover:border-blue-400"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full md:w-2/3 p-3 rounded-lg border-2 border-blue-200 focus:border-blue-900 focus:outline-none transition-all duration-300 hover:border-blue-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full md:w-2/3 p-3 rounded-lg border-2 border-blue-200 focus:border-blue-900 focus:outline-none transition-all duration-300 hover:border-blue-400"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-900 px-8 md:px-12 py-3 rounded-lg text-white font-semibold text-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Register
          </button>
          <p className="text-gray-600 text-sm md:text-base">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-900 hover:text-blue-700 font-semibold"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    <ToastContainer />
    </div>
  );
};

export default Register;
