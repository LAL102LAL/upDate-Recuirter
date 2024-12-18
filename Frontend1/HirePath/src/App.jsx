import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ContactForm from "./Pages/ContactForm";
import MarketPlace from "./Pages/MarketPlace";
import JobProfileSection from "./Pages/Profile";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/Aboutus";
import Footersection from "./LandingPage/FooterSection";
import CoursePage from "./Pages/CoursePage";
import JobForm from "./Pages/AddJobPage";
import { useEffect, useState } from "react";
import axios from "axios";
import ApplyPage from "./components/ApplyPage";
import JobDescription from "./Pages/JobDetails";
import Resume from "./Pages/Resume";
import ResumeTemplat from "./components/ResumeTemplate";
import RT from "./Pages/RT";
import NavBar from "./LandingPage/NavBar";
import { ShimmerCategoryItems } from "shimmer-effects-react";
import PaymentSuccess from "./Pages/PaymentSucess";
//  import InterviewPrep from "./components/InterviewPrep";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/template" element={<RT />} />
          <Route path="/Courses" element={<CoursePage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           <Route
            path="/payment-success"
            element={
              
                <PaymentSuccess />
             
            }
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/marketplace"
            element={
              <ProtectedRoute>
                <MarketPlace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applypage"
            element={
              <ProtectedRoute>
                <ApplyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AddJob"
            element={
              <ProtectedRoute>
                <ProtectionLayer>
                  <JobForm />
                </ProtectionLayer>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <JobProfileSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job/:jobId"
            element={
              <ProtectedRoute>
                <JobDescription />
              </ProtectedRoute>
            }
          />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<LandingPage />} /> {/* Default route */}
        </Routes>
      </Router>
      <div className="   fixed"></div>
      <Footersection />
    </>
  );
};

export default App;

const ProtectedRoute = ({ children }) => {
  const [Authenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/check`,
          { withCredentials: true }
        );

        setIsAuthenticated(response.data.Authenticated);
      } catch (error) {
        console.error(error); // Log error to the console
        setIsAuthenticated(false); // Set as false if there's an error
      } finally {
        setLoading(false); // Set loading to false after API call completes
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div>
        <NavBar />
      </div>
    ); // Show loading message while waiting for response
  }

  if (Authenticated === null || !Authenticated) {
    return <Navigate to="/login" />; // Redirect if not authenticated
  }

  return children; // Render children if authenticated
};

const ProtectionLayer = ({ children }) => {
  const [isRecruiter, setIsRecruiter] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state for better UX

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/check`,
          { withCredentials: true }
        );
        console.log(response.data.WhoIAm); // Check response to verify data structure
        if (response.data.WhoIAm === "recruiter") {
          setIsRecruiter(true);
        } else {
          setIsRecruiter(false);
        }
      } catch (error) {
        console.error(error); // Log error for debugging
        setIsRecruiter(false); // Treating failure as non-recruiter
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };
    checkAuth();
  }, []);

  if (loading)
    return (
      <div>
        <NavBar />
      </div>
    ); // Show loading state while checking auth

  if (isRecruiter === null) {
    return <Navigate to="/landing" />;
  }

  return isRecruiter ? children : <Navigate to="/Profile" />;
};
