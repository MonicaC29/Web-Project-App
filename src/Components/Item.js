import React, { useState } from "react";
import Form from "./Form";

const Item = ({ project, updateProject, deleteProject }) => {
  //State to track whether the item is in edit mode
  const [isEditing, setEditing] = useState(false);
  //Handler for updating a project and exiting edit mode
  const handleUpdate = (updatedProject) => {
    //Call the updateProject prop with project Id and the update project data
    updateProject(project.id, updatedProject);
    //Set editing to false to exit edit mode
    setEditing(false);
  };

  //The component conditionally renders either the form component or the project details and options.
  return (
    <div className="project-item">
      {isEditing ? (
        <Form project={project} onSubmit={handleUpdate} />
      ) : (
        //If in edit mode, render the Form component with the current project data
        //If not edit mode, render the project details and options(title, description and URL).
        <div className="item-container">
          <div>
            {/*Display project title*/}
            <span
              style={{
                fontFamily: "georgia",
                color: "#561656",
                fontWeight: "bold",
              }}
            >
              Title:
            </span>{" "}
            {project.title}
          </div>
          <div>
            {/*Display project description*/}
            <span
              style={{
                fontFamily: "georgia",
                color: "#561656",
                fontWeight: "bold",
              }}
            >
              Description:
            </span>
            {project.description}
          </div>
          <div>
            {/*Display project URL*/}
            <span
              style={{
                fontFamily: "georgia",
                color: "#561656",
                fontWeight: "bold",
              }}
            >
              url:{" "}
            </span>
            {project.url}
          </div>
          {/*Options for editing and deleting a project*/}
          {/*The component provides Edit and Delete buttons that trigger the corresponding actions:setEditing for Edit and deleteProject for Delete*/}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteProject(project.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Item;
