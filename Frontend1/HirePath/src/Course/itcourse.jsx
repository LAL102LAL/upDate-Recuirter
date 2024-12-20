import react from "react";



const itcourses=()=>{
    const courses=[
{
    name:"FULL STACK WEB DEVELOPMENT",
    description:"Gain skills for front and backend. ",
  },
  {
    name:"DATA SCIENCE",
    description:"Improving skills of Programming , Analytics ,AI and Machine Learning.",
  },
  {
    name:"ARTIFICIAL INTELLIGENCE(AI)",
    description:"Problem solving ,Decision making ,Creativity and Autonomy",
  },
   {
        name: "MACHINE LEARNING",
        description:
          "Master ML algorithms and techniques to build intelligent systems.",
      },
      {
        name: "CLOUD COMPUTING",
        description: "Learn to deploy and manage applications on the cloud.",
      },
      {
        name: "CYBERSECURITY",
        description:
          "Gain expertise in protecting networks and data from cyber threats.",
      },
      {
        name:"ELECTRIC VEHICLE",
        description:"Design,Analysis,Control,and Callibration",
      },
      {
        name:"IT AUDIT MANAGER",
        description:"Gain skills for manage and control IT",
      },
      {
        name:"POWER BI ",
        description:"Improving skills of Create Report and Dasboard & Make data-driven decisions"
      }
];

const applyCourse = (courseName) => {
  alert(`You have applied for the ${courseName} course!`);
};




return (

  <>
  
  <section id="IT COURSES" className="py-10 bg-gray-100 text-center">
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

export default itcourses;
