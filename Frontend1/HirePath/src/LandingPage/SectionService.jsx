// import React, { useEffect, useRef } from "react";

// const SectionService = () => {
//   const serviceCardsRef = useRef([]);

//   useEffect(() => {
//     const serviceCards = serviceCardsRef.current;

//     const revealServiceCards = () => {
//       const triggerBottom = window.innerHeight * 0.85;

//       serviceCards.forEach((card, index) => {
//         const cardTop = card.getBoundingClientRect().top;

//         if (cardTop < triggerBottom) {
//           setTimeout(() => {
//             card.classList.add("visible");
//           }, index * 200); // Adds staggered animation delay for each card
//         }
//       });
//     };

//     window.addEventListener("scroll", revealServiceCards);
//     revealServiceCards(); // Initial call to reveal cards on page load

//     return () => {
//       window.removeEventListener("scroll", revealServiceCards);
//     };
//   }, []);

//   return (
//     <>
//       <section className="services-section">
//         <h2>Services We Provide</h2>
//         <hr />
//         <br />
//         <div className="services-container">
//           <div
//             ref={(el) => (serviceCardsRef.current[0] = el)}
//             className="service-card hover:scale-105"
//             id="card-1"
//           >
//             <h1>Job Listings</h1>
//           </div>
//           <div
//             ref={(el) => (serviceCardsRef.current[1] = el)}
//             className="service-card hover:scale-105"
//             id="card-2"
//           >
//             <h1>Career Counseling</h1>
//           </div>
//           <div
//             ref={(el) => (serviceCardsRef.current[2] = el)}
//             className="service-card hover:scale-105"
//             id="card-3"
//           >
//             <h1>Resume Building</h1>
//           </div>
//           <div
//             ref={(el) => (serviceCardsRef.current[3] = el)}
//             className="service-card hover:scale-105"
//             id="card-4"
//           >
//             <h1>Interview Prep</h1>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SectionService;

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SectionService = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const serviceCards = serviceCardsRef.current;

    const revealServiceCards = () => {
      const triggerBottom = window.innerHeight * 0.85;

      serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 200); // Adds staggered animation delay for each card
        }
      });
    };

    window.addEventListener("scroll", revealServiceCards);
    revealServiceCards(); // Initial call to reveal cards on page load

    return () => {
      window.removeEventListener("scroll", revealServiceCards);
    };
  }, []);

  return (
    <>
      <section className="services-section">
        <h2>Services We Provide</h2>
        <hr />
        <br />
        <div className="services-container">
          <div
            ref={(el) => (serviceCardsRef.current[0] = el)}
            className="service-card hover:scale-105"
            id="card-1"
          >
            <h1>Job Listings</h1>
          </div>
          <div
            ref={(el) => (serviceCardsRef.current[1] = el)}
            className="service-card hover:scale-105"
            id="card-2"
          >
            <h1>Career Counseling</h1>
          </div>
          <Link to={"/resume"}>
            <div
              ref={(el) => (serviceCardsRef.current[2] = el)}
              className="service-card hover:scale-105"
              id="card-3"
            >
              <h1>Resume Building</h1>
            </div>
          </Link>
          {/* <Link to={"Intrerviewque"}> */}
          <div
            ref={(el) => (serviceCardsRef.current[3] = el)}
            className="service-card hover:scale-105"
            id="card-4"
          >
            <h1>Interview Prep</h1>
          </div>
          {/* </Link>  */}
        </div>
      </section>
    </>
  );
};

export default SectionService;



