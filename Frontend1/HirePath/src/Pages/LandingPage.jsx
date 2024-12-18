// LandingPage.js
import React from "react";
import NavBar from "../LandingPage/NavBar";
import WelcomeSection from "../LandingPage/WelcomeSection";
import SectionService from "../LandingPage/SectionService";
import JobRolesSection from "../LandingPage/JobRolesSection";
import MarqueeSection from "../LandingPage/MarqueeSection";
import FeaturesSection from "../LandingPage/FeaturesSection";
import JobCategories from "../LandingPage/JobCategories";

import ChatBot from "../components/ChatBot";
import HeroPage from "../LandingPage/HeroPage";
import Resume from "../../Resume";
import Home from "./Home";




const LandingPage = () => {
  return (
    <>
      <NavBar />
      <WelcomeSection />
      <Resume/>
      <HeroPage />
      <SectionService />
      <JobRolesSection />
      <MarqueeSection />
      <ChatBot />
      <FeaturesSection />
      <JobCategories />
    </>
  );
};

export default LandingPage;
