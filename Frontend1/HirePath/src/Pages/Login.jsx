import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../LandingPage/NavBar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [failed, setFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const onRegisterSubmit = async (data) => {
    try {
      console.log(data);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/getstarted`,
        {
          name: data.fullName,
          email: data.email,
          password: data.password,
          WhoIAm: data.whoIAm,
        }
      );

      if (response.status == 200) {
        window.location.href = "/login";
      }
    } catch (error) {
      setFailed(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email: e.target.email.value, password: e.target.password.value },
        { withCredentials: true }
      );
      if (response.data) {
        navigate("/marketPlace");
      }
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex justify-center items-center min-h-screen flex-col bg-gray-800 p-4">
        <div className="bg-white p-4  max-w-sm w-full mt-10 shadow-md rounded-lg">
          <h1 className="text-xl font-semibold text-center mb-4">
            {isRegistering ? "REGISTER YOURSELF" : "LOGIN"}
          </h1>

          <div className="text-center mb-3">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-500 underline text-sm"
            >
              {isRegistering ? "Have an account? Login" : "New here? Register"}
            </button>
          </div>

          {failed && (
            <div className="border-red-500 border text-red-600 text-sm p-2 mb-3 rounded">
              Try again later. <strong>Refresh</strong>
            </div>
          )}

          {isRegistering ? (
            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="flex flex-col gap-y-3 mt-5"
            >
              <label className="w-full">
                <p className="text-xs text-gray-700 mb-1">Full Name:</p>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  })}
                  className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
                />
                {errors.fullName && (
                  <span className="text-pink-500 text-xs">
                    {errors.fullName.message}
                  </span>
                )}
              </label>

              <label className="w-full">
                <p className="text-xs text-gray-700 mb-1">Email Address:</p>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email", { required: "Email is required" })}
                  className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
                />
                {errors.email && (
                  <span className="text-pink-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label className="w-full">
                <p className="text-xs text-gray-700 mb-1">Who I Am:</p>
                <select
                  {...register("whoIAm", {
                    required: "Please select your role",
                  })}
                  className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
                >
                  <option value="">Select one</option>
                  <option value="jobseeker">jobSeeker</option>
                  <option value="recruiter">recruiter</option>
                  {/* <option value="recruiter">Both</option> */}
                </select>
                {errors.whoIAm && (
                  <span className="text-pink-500 text-xs">
                    {errors.whoIAm.message}
                  </span>
                )}
              </label>

              <label className="w-full">
                <p className="text-xs text-gray-700 mb-1">Password:</p>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must be 8+ characters with uppercase, lowercase, number, and special character.",
                    },
                  })}
                  className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
                />
                {errors.password && (
                  <span className="text-pink-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </label>

              <label className="w-full">
                <p className="text-xs text-gray-700 mb-1">Confirm Password:</p>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
                />
                {errors.confirmPassword && (
                  <span className="text-pink-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>

              <button
                type="submit"
                className="bg-yellow-400 py-2 px-3 rounded-lg mt-3 font-medium text-gray-900 w-full text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "REGISTERING..." : "REGISTER"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-y-3">
              {errorMessage && (
                <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-600 rounded-lg text-xs">
                  {errorMessage}
                </div>
              )}
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                required
                className="bg-gray-100 rounded-lg w-full p-2 border border-gray-300 outline-none text-sm"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-blue-500 text-white font-bold py-2 rounded-lg text-sm ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
              >
                {isLoading ? "Logging in..." : "LOGIN"}
              </button>
            </form>
          )}
        </div>
      </div>
      {/* <header>
        <SignedOut>
         
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}



      
    </>
  );
};

export default AuthPage;
