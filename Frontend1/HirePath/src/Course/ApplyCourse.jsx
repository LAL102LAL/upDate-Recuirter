import React, { useEffect } from "react";
import ITCOURSE from "./itcourse";
import MBACourse from "./mbacourse";
import CourseForm from "./courseform";
const ApplyCourse = () => {
  const submitApplication = (event) => {
    event.preventDefault();
    alert("Application submitted!");
  };

  useEffect(() => {
    const applySection = document.getElementById("apply-course");
    const checkVisibility = () => {
      const sectionPosition = applySection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
        applySection.classList.add("opacity-100", "translate-y-0");
      }
    };

    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);
  
  return (
<>
<>
<>

<ITCOURSE/>
<MBACourse/>
<CourseForm/>


 <section
      id="apply-course"
      className="opacity-0 transform translate-y-12 transition-all duration-500 ease-in-out bg-gray-100 py-8 border-t border-b border-gray-300 text-center"
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Apply for Courses
      </h2>
      <form
        id="apply-form"
        onSubmit={submitApplication}
        className="mx-auto max-w-lg bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300"
      >
        <label
          htmlFor="course"
          className="block text-left font-semibold text-gray-700 mt-4"
        >
          Course Name:
        </label>
        <input
          type="text"
          id="course"
          name="course"
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />

        <label
          htmlFor="name"
          className="block text-left font-semibold text-gray-700 mt-4"
        >
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />

        <label
          htmlFor="email"
          className="block text-left font-semibold text-gray-700 mt-4"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 mt-2 border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
        

        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
        >
          Submit Application
        </button>
        </form>
    </section>
    
  
    </>
    </>
    </>
  );
};


export default ApplyCourse;
