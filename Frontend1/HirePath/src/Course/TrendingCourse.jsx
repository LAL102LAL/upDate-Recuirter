import React from "react";


const TrendingCourse = () => {
  const courses = [
    {
      name: "Web Development",
      description:
        "Learn HTML, CSS, and JavaScript for full-stack web development.",
    },
    {
      name: "Data Science",
      description:
        "Analyze data, apply machine learning, and perform data visualization.",
    },
    {
      name: "Machine Learning",
      description:
        "Master ML algorithms and techniques to build intelligent systems.",
    },
    {
      name: "Cloud Computing",
      description: "Learn to deploy and manage applications on the cloud.",
    },
    {
      name: "Cybersecurity",
      description:
        "Gain expertise in protecting networks and data from cyber threats.",
    },
    {
      name: "Human Resources",
      description:
        "Looking to enhance your HR skills, you’re in the right place!",
    },
    {
      name: "Customer Care",
      description:
        "Customer care describes how people are treated when they interact with a brand.",
    },
    {
      name: "Project Coordinator",
      description: "A trending job role nowadays.",
    },
    { name: "Python Developer", description: "Gain expertise in coding." },
    { name: "Advance Excel", description: "Learn advanced Excel formulas." },
    {
      name: "Java Developer",
      description: "Gain expertise in developing complex code.",
    },
    {
      name: "Software Developer",
      description: "One of the most loved careers nowadays.",
    },
    {
      name: "Artificial Intelligence",
      description: "Gain skills for the future world.",
    },
    {
      name: "Backend Developer",
      description: "Gain expertise in the backend world.",
    },
    {
      name: "UI/UX Designer",
      description: "Designing enhances skills and shows creativity.",
    },
     
    
    
  ];

  const applyCourse = (courseName) => {
    alert(`You have applied for the ${courseName} course!`);
  };

  return (

    <>
    
    <section id="trending-courses" className="py-10 bg-gray-100 text-center">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-auto px-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 text-center w-full max-w-xs"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {course.name}
            </h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            
            <button
              onClick={() => applyCourse(course.name)}
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Apply Now
            </button>
            
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default TrendingCourse;
