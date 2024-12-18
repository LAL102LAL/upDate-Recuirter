import React, { useEffect, useState } from "react";

// Sample job data
const jobData = [
  {
    id: 1,
    title: "Service Desk",
    company: "Flipkart",
    location: "Noida, UP",
    logo: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202408/66b4d15c9069f-flipkart-304529645-16x9.jpg?size=1280:720",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Swiggy",
    location: "Gungao, Haryana",
    logo: "https://miro.medium.com/v2/resize:fit:800/1*tCLgoTtePAdJhGRImx-B-g.png",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "TCS",
    location: "Remote",
    logo: "https://contentstatic.techgig.com/thumb/msid-112431972,width-800,resizemode-4/WFH-and-hybrid-roles-available-at-TCS-CS-and-IT-grads-must-apply.jpg?246926",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Blinkit",
    location: "Hinjewaadi, Pune",
    logo: "https://cdn.finshots.app/images/2022/03/blinkit.jpg",
  },
  {
    id: 5,
    title: "Graphic Designer",
    company: "Netflix",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
  },


  {
    id: 6,
    title: "UI & UX Designer",
    company: "Netflix",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
  },

  {
    id: 7,
    title: "Ai Tools",
    company: "Netflix",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
  },


  {
    id: 8,
    title: "Cloud Engineer",
    company: "Netflix",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
  },
];

const HeroPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to shift the cards
  const shiftCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobData.length); // Loop back to the first card when reaching the end
  };

  useEffect(() => {
    const interval = setInterval(shiftCards, 2000); // Change card every 2 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[200%] bg-gray-100 p-4">
      <div className="relative flex overflow-hidden w-full max-w-5xl items-center space-x-4">
        {jobData.map((job, index) => {
          const isCenter = index === currentIndex;
          const isLeftSide = index === (currentIndex - 1 + jobData.length) % jobData.length;
          const isRightSide = index === (currentIndex + 1) % jobData.length;

          return (
            <div
              key={job.id}
              className={`transition-all duration-500 transform flex flex-col items-center bg-white shadow-md rounded-lg p-4 ${
                isCenter
                  ? "scale-100 opacity-100 z-20 w-3/4 md:w-2/5"
                  : isLeftSide || isRightSide
                  ? "scale-90 opacity-70 z-10 w-2/5 md:w-1/4"
                  : "hidden"
              }`}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-xs text-gray-500">{job.location}</p>
              <button
                onClick={() => (window.location.href = "/login")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroPage;
