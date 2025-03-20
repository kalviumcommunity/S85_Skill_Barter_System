import React from "react";
import LandingPage from "./pages/LandingPage";
import UserEntity from "./components/UserEntity";
 // Import the EntityList component
 import HomePage from "./components/HomePage";
// import EntityList from "./components/EnitityList";
function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <div className="p-6">
        {/* Render the UserEntity with dummy data */}
        {/* <UserEntity
          name="Alice Johnson"
          skillOffered="Graphic Design"
          skillRequested="Web Development"
          description="Passionate designer looking to exchange skills!"
        /> */}
        <HomePage/>
      </div>
      
      <div className="p-6">
        {/* Render the list of entities fetched from the backend */}
        {/* <EntityList /> */}
      </div>
    </>
  );
}

export default App;
