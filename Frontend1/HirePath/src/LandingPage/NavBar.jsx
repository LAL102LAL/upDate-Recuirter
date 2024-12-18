import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import profile from "../assets/profile2.png";
import img from "../assets/plus_icon.png";
import img2 from "../assets/down-arrow.png";
import RecruiterForm from "../components/RecruiterForm/RecruiterForm.jsx"; // Import the RecruiterForm
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isJobSeeker, setIsJobSeeker] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle
  const [role, setRole] = useState("Job Seeker");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle
  const [isMobileView, setIsMobileView] = useState(false); // Track mobile view
  const [showRecruiterForm, setShowRecruiterForm] = useState(false); // State for modal
  const sidebarRef = useRef(null);

  const checkUserStatus = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Profile`,
        { 
          withCredentials: true ,
        }
      );
      if (response.status === 200) {
        setIsUserAuthenticated(true);
        setIsJobSeeker(response.data.WhoIAm !== "recruiter");
      }
    } catch {
      setIsUserAuthenticated(false);
    }
  };
 
  const handleLogout = async () => {
    try {
      const logout = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/logout`,
        {},
        { withCredentials: true }
      );
      if (logout.status === 200) {
        setIsUserAuthenticated(false);
        window.location.href = "/Landing";
      }
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      sidebarOpen
    ) {
      setSidebarOpen(false);
    }
  };

  const changeRole = (selectedRole) => {
    setRole(selectedRole);
    setDropdownOpen(false); // Close dropdown on selection
  };

  const updateViewMode = () => {
    setIsMobileView(window.innerWidth < 768); // Adjust based on your breakpoint
  };

  useEffect(() => {
    if (!isUserAuthenticated) checkUserStatus();

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", updateViewMode);

    // Check initial screen width
    updateViewMode();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateViewMode);
    };
  }, [isUserAuthenticated, sidebarOpen]);

  return (
    <>
      <nav className="bg-red-700 text-white text-sm sm:text-base fixed top-0 left-0 w-full z-50 p-2 sm:px-4 md:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Sidebar Toggle Button for small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-white">
              {sidebarOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>

          {/* Sidebar Menu for small screens */}
          <div
            ref={sidebarRef}
            className={`fixed left-0 top-0 w-64 h-full bg-red-600 text-white z-40 transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 bg-red-700">
              <h2 className="text-2xl font-extrabold">upDate</h2>
              <button onClick={toggleSidebar}>
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                {isUserAuthenticated ? (
                  <button
                    onClick={() => setShowRecruiterForm(true)}
                    className="flex items-center justify-center gap-2 w-[90%] mx-auto py-3 px-4 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-400"
                  >
                    <img src={img} alt="Jobs Icon" className="w-5" />
                    Post Jobs
                  </button>
                ) : (
                  <button
                    onClick={() => alert("Please log in to post a job.")}
                    className="flex items-center justify-center gap-2 w-[90%] mx-auto py-3 px-4 bg-red-500 text-white rounded-md drop-shadow-lg cursor-not-allowed"
                  >
                    <img src={img} alt="Jobs Icon" className="w-5" />
                    Post Jobs
                  </button>
                )}
              </li>
              <li className="border-t border-white">
                <a
                  href="/Landing"
                  className="block py-3 px-4 text-white hover:bg-red-500"
                >
                  Home
                </a>
              </li>
              <li className="border-t border-white">
                <a href="#" className="block py-3 px-4 text-white hover:bg-red-500">
                  All Jobs
                </a>
              </li>
              <li className="border-t border-white">
                <a
                  href="/courses"
                  className="block py-3 px-4 text-white hover:bg-red-500"
                >
                  Courses
                </a>
              </li>
            </ul>
            <div className="absolute bottom-4 left-0 w-full">
              {isUserAuthenticated ? (
                <button 
                  onClick={handleLogout}
                  className="bg-white text-red-700 mx-4 w-[calc(100%-2rem)] py-2 rounded-md text-center font-bold hover:bg-gray-200"
                >
                  Logout
                </button>
              ) : (
                <a
                  href="/login"
                  className="bg-white text-red-700 mx-4 w-[calc(100%-5rem)] py-2 rounded-md text-center font-bold hover:bg-gray-200 p-20"
                >
                  Login
                </a>
              )}
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="/" className="text-xl sm:text-2xl font-extrabold text-white">
              upDate
            </a>
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/Landing" className="menu-link text-[1rem] font-bold">
              Home
            </a>
            <a href="#" className="menu-link  text-[1rem] font-bold">
              All Jobs
            </a>
            <a href="/courses" className="menu-link  text-[1rem] font-bold">
              Courses
            </a>
          </div>

          {/* Authentication and Dropdown Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {!isMobileView && (
              <>
                <div className="relative">
                  {isUserAuthenticated ? (
                    <button
                      onClick={() => setShowRecruiterForm(true)}
                      className="bg-white text-red-700 font-bold px-3 py-2 rounded-full flex items-center justify-between gap-2 cursor-pointer shadow-md text-xs sm:text-sm"
                    >
                      Post Job
                      <img src={img2} alt="Arrow Icon" className="w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => alert("Please log in to post a job.")}
                      className="bg-red-200 text-white font-bold px-3 py-2 rounded-full flex items-center justify-between gap-2 cursor-not-allowed shadow-md text-xs sm:text-sm"
                    >
                      Post Job
                      <img src={img2} alt="Arrow Icon" className="w-4" />
                    </button>
                  )}
                </div>

                {/* <div className="relative hidden lg:block">
                  {isUserAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="bg-white text-red-700 font-bold px-3 py-2 rounded-md shadow-md hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  ) : (
                    <a
                      href="/login"
                      className="bg-white text-red-700 font-bold px-3 py-2 rounded-md shadow-md hover:bg-gray-200"
                    >
                      Login
                    </a>
                  )}
                </div> */}
              </>
            )}
            <div className="relative">
              <button
                id="roleDropdown"
                className="bg-white text-[rgb(197,6,6)] font-bold min-w-[120px] px-3 py-2 rounded-full flex items-center justify-between gap-2 cursor-pointer shadow-md text-xs sm:text-sm"
                onClick={toggleDropdown}
              >
                {role}
                <img src={img} alt="Arrow Icon" className="w-4" />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute bg-white shadow-md rounded-b-lg top-full left-0 w-[145px] transition-transform duration-300 ease-in-out origin-top"
                  id="dropdownMenu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-red-600 text-center font-bold text-black"
                    onClick={() => changeRole("Recruiter")}
                  >
                    Recruiter
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-red-600 text-center font-bold text-black"
                    onClick={() => changeRole("Job Seeker")}
                  >
                    Job Seeker
                  </a>

                  
                </div>
              )}
            </div>

            <div className="relative hidden md:block lg:block">
                  {isUserAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="bg-white text-red-700 font-bold px-3 py-2 rounded-md shadow-md hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  ) : (
                    <a
                      href="/login"
                      className="bg-white text-red-700 font-bold px-3 py-2 rounded-md shadow-md hover:bg-gray-200"
                    >
                      Login
                    </a>
                  )}
                </div>

            <a href="/Profile" id="profileSection">
              <img
                src={profile}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer border border-white shadow-md"
              />
            </a>
          </div>
        </div>
      </nav>

      {showRecruiterForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80 max-w-md ">
            <RecruiterForm />

            <button
              onClick={() => setShowRecruiterForm(false)}
              className="mt-4 bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 text-center"
            >
              Close Form
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
