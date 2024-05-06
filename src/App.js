//Import the React library which is required for creating React components.
import React from "react";
//Import the projectList component from the specified file path
import ProjectList from "./Components/ProjectList";
import "./App.css";

function App() {
  return (
    //Main container for the entire app with a class name of app-container.
    <div className="app-container">
      {/*Render the projectList component*/}
      <ProjectList />
    </div>
  );
}

//Export the App component as the default export
export default App;
