import React, { useState, useEffect } from 'react';

const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    yourName: '',
    email: '',
    contactNumber: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    console.log(formData);
  };

  const PriceDisplay = () => {
    const [price,setPrice]=useState (8888) ;
    
    
    useEffect(() => {
      
      const timer = setTimeout(() => {
        setPrice (4444);
        
      },1000);
      
      
      return () => clearTimeout(timer); // Clean up the timeout
    },
     []);

    return (
      <div className="flex items-center justify-center my-10">
        <div className="relative">
          
          <span className="text-3xl font-bold text-gray-800  mr-2">Program Fee- </span>
          
          
          <span
            className="text-4xl font-bold text-red-500 animate-price-change"
            style={{ display: 'inline-block' }}
          >
            {price}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-lg mx-auto my-10 p-6 border border-gray-700 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Apply for Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-gray-700 font-medium mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="yourName" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="yourName"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500 font-medium mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-500 font-medium mb-2">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-500 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <div className="flex justify-center">
            <a >
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
             -- Submit Application--
            </button>
            </a>
          </div>
        </form>
      </div>
       <h1><b><big><center>DURATION - 1+1 (Learning + Internship)</center> </big></b></h1>

      <PriceDisplay />
    </>
  );
};

export default CourseForm;