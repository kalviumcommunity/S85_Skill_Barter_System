import React from "react";
import LandingPage from "./pages/landingPage";
import UserEntity from "./components/UserEntity";

function App() {
  return (
    <>
      <LandingPage />
      <div className="p-6">
        {/* Render the UserEntity with dummy data */}
        <UserEntity
          name="Alice Johnson"
          skillOffered="Graphic Design"
          skillRequested="Web Development"
          description="Passionate designer looking to exchange skills!"
        />
      </div>
    </>
  );
}

export default App;
