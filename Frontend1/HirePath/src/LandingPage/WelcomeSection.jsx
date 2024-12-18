import React, { useState } from "react";
import img from "../assets/banner-main.png";

const WelcomeSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission (e.g., prevent default behavior)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <main
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <section className="relative flex flex-col justify-center items-center text-center h-full">
        {/* Welcome Content */}
        <div className="z-10 text-black w-4/5 max-w-2xl px-5 py-10">
          <h1 className="text-5xl font-extrabold relative">
            Welcome to{" "}
            <strong className="font-extrabold text-red-600 relative">upDate</strong>
          </h1>
          <p className="text-lg italic mb-8">
            Explore 1000+ job openings and find your dream job today.
          </p>
          <a
            href="/login"
            className="inline-block px-8 py-3 text-lg text-white bg-red-600 rounded-xl transition duration-300 hover:bg-white hover:text-red-600 hover:shadow-lg"
          >
            Explore Jobs
          </a>
        </div>

        {/* Search Bar */}
        <div className="w-4/5 flex justify-center items-center mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex w-full shadow-inner-custom overflow-hidden justify-between items-center p-2 rounded-full bg-white"
          >
            <input
              type="text"
              placeholder="Enter what you are looking for?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 font-bold px-4 py-3 rounded-3xl text-lg text-red-600 placeholder:text-red-600 outline-0 bg-transparent"
            />
            <button
              type="submit"
              className="flex items-center justify-center p-2 rounded-full bg-red-600 text-white shadow-md"
            >
              <img src="search.svg" alt="search" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default WelcomeSection;
