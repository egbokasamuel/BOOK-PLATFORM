import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SelfPublish from "./pages/SelfPublish"; // Updated to reflect the correct component name
import HelpCentre from "./Components/HelpCentre";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

// Sign Out Button Component
const SignOutButton = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSignOut = () => {
    // Clear authentication data (e.g., clear tokens or user data from localStorage)
    console.log("User signed out");

    // Redirect the user to the home page after signing out
    navigate("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
    >
      Sign Out
    </button>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SignOutButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-publishing" element={<SelfPublish />} />{" "}
          {/* Correct component */}
          <Route path="/help-centre" element={<HelpCentre />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
