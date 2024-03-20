import React, { useState } from "react";
import Form from "./Form";

const Item = ({ project, updateProject, deleteProject }) => {
  const [isEditing, setEditing] = useState(false);

  const handleUpdate = (updatedProject) => {
    updateProject(project.id, updatedProject);
    setEditing(false);
  };

  return (
    <div className="project-item">
      {isEditing ? (
        <Form project={project} onSubmit={handleUpdate} />
      ) : (
        <div className="item-container">
          <div>
            {/* Display project title */}
            <span
              style={{
                fontFamily: "georgia",
                color: "yellow",
                fontWeight: "bold",
              }}
            >
              Title:
            </span>{" "}
            {project.title}
          </div>
          <div>
            {/* Display project description */}
            <span
              style={{
                fontFamily: "georgia",
                color: "yellow",
                fontWeight: "bold",
              }}
            >
              Description:
            </span>{" "}
            {project.description}
          </div>
          <div>
            {/* Display project URL as clickable link */}
            <span
              style={{
                fontFamily: "georgia",
                color: "yellow",
                fontWeight: "bold",
              }}
            >
              Url:{" "}
            </span>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </a>
          </div>
          <div className="button2">
            {/* Options for editing and deleting a project */}
            {/* The component provides Edit and Delete buttons that trigger the corresponding actions: setEditing for Edit and deleteProject for Delete */}
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
