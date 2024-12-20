


import react from "react";


const mbacourses=()=>{
    const courses=[

{
    name:"DIGITAL MARKETING",
    description: " The use of digital channels and technologies to promote products and services to cosumers.",
  },
  {
    name: "RISER MANAGEMENT",
    description: "Maintaining,Expanding,and Supporting a building's internal telecommunication infrastructure.",
  },
  {
    name:"FINANCIAL RISER MANAGEMENT",
    description:"Gain skills for  stock market,and Trading .",
  },
  {
    name:"BUSINESS ANALYTICS",
    description:"Gain skills for data-driven business decisions.",
  },
  {
    name:"HRM (HUMAN RESOURCES MANAGEMENT)",
    description:"Gain skills for Coordinating,Managing,Allocating human capital and more...",
  },
  {
    name:"PRODUCT MANAGEMENT",
    description:"Improving skills of Planning,Developing,Launching,and Managing a product or Service.",
  },
  {
    name:"FINANCIAL MODELLING",
    description:"Developing financial models,Analyzing financial data,Presenting findings,Updating models and more...",
  },
  {
    name:"CPA (CERTIFIED PUBLIC ACCOUTANT)",
    description:"Prepare,Organize and Analyze financial records.",
  },
  {
    name:"PROJECT MANAGEMENT",
    description:"Planning,Organizing,and Executing a project from start to finish.",
  },
];

const applyCourse = (courseName) => {
  alert(`You have applied for the ${courseName} course!`);
};

return (

  <>
  
  <section id="MBA Course" className="py-10 bg-gray-100 text-center">
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

export default mbacourses;
