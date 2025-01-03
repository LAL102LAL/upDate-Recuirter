import React, { useState } from "react";

import PersonalDetails from "./ApplyPage/PersonalDetails";
import QualificationDetails from "./ApplyPage/QualificationDetails";
import Skills from "./ApplyPage/Skills";

import DocumentsUpload from "./ApplyPage/DocumentsUpload";
import ResidencyDetails from "./ApplyPage/ResidencyDetails";

const ApplyPage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sections = [
    <PersonalDetails />,
    <QualificationDetails />,
    <Skills />,
    <ResidencyDetails />,

    <DocumentsUpload />,
  ];

  const handleSectionChange = (index) => {
    setCurrentSectionIndex(index);
  };

  const submitForm = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <div className="navbar12">
        <ul>
          <li id="personalDetails-tab" onClick={() => handleSectionChange(0)}>
            Personal Details
          </li>
          <li
            id="qualificationDetails-tab"
            onClick={() => handleSectionChange(1)}
          >
            Qualification Details
          </li>
          <li id="skills-tab" onClick={() => handleSectionChange(2)}>
            Skills
          </li>
          <li id="residency-tab" onClick={() => handleSectionChange(3)}>
            Residency Details
          </li>
          <li id="documents-tab" onClick={() => handleSectionChange(4)}>
            Documents Upload
          </li>
        </ul>
        <div
          className="progress-line"
          style={{
            width: `${((currentSectionIndex + 1) / sections.length) * 100}%`,
          }}
        />
      </div>

      <div className=" ml-[30%]">
        <form onSubmit={(e) => e.preventDefault()}>
          {sections[currentSectionIndex]}

          <div className="button-container">
            {currentSectionIndex > 0 && (
              <button
                type="button"
                className="prev-btn"
                onClick={() => handleSectionChange(currentSectionIndex - 1)}
              >
                Previous
              </button>
            )}
            {currentSectionIndex < sections.length - 1 ? (
              <button
                type="button"
                className="next-btn"
                onClick={() => handleSectionChange(currentSectionIndex + 1)}
              >
                Next
              </button>
            ) : (
              <button type="button" className="submit-btn" onClick={submitForm}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
