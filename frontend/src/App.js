//Import the React library which is required for creating React components.
import React from "react";
//Import the projectList component from the specified file path
import ProjectList from "./Components/ProjectList";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="description">
        <h1>
          Project Portfolio is your ultimate tool for managing and organizing
          all the projects you've been involved in. With this app, you can
          effortlessly keep track of your projects. Whether you're a freelancer,
          a student, or a professional, this app streamlines project management,
          making it easier than ever to stay organized and productive. Download
          "Project Organizer" now and take control of your projects with ease.
        </h1>
      </div>
      <div className="app-container">
        {/*Render the projectList component*/}
        <ProjectList />
      </div>
    </div>
  );
}

//Export the App component as the default export
export default App;
