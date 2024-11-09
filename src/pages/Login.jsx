import React, { useState } from "react";
import { useAuth } from "../components/Context/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://morentb.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        login(data);
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Login Failed, Please Check Credentials",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
    } catch (error) {
      console.log("Login Error", error);
      toast.error("An unexpected error occured, Please try again later", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[50%] bg-cover bg-center h-[300px] md:h-screen bg-[url('https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
      <div className="flex items-center w-full md:w-[50%]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center min-h-[400px] md:h-screen w-full gap-4 md:gap-8 px-4 md:px-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
            Welcome Back
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full max-w-md px-4 py-2 md:py-3 rounded-lg border-2 border-blue-200 focus:border-blue-900 focus:outline-none transition-all duration-300"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full max-w-md px-4 py-2 md:py-3 rounded-lg border-2 border-blue-200 focus:border-blue-900 focus:outline-none transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-900 px-8 md:px-12 py-2 md:py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
