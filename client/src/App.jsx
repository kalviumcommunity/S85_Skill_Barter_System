import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/landingPage";
import EntityComponent from "./components/EntityComponent"; // Import the new component

function App() {
  return (
    <>
      <LandingPage />
      <div className="p-6">
        {/* Render the EntityComponent with dummy data */}
        <EntityComponent 
          name="John Doe" 
          description="Experienced Web Developer" 
          skill="React.js" 
        />
      </div>
    </>
  );
}

export default App;
