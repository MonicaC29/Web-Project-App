import { useState, useEffect } from "react";
import Item from "./Item";
import Form from "./Form";

const ProjectList = () => {
  //State to manage the list of projects
  const [projects, setProjects] = useState([]);

  //I used the react hook useEffect that allow side effects (modification of state or an unintended consequence that occurs in response to an action or event) in function component.
  useEffect(() => {
    fetchData();
  }, []);

  //I defined an async function named fetchData
  const fetchData = async () => {
    try {
      //I used the fetch function to make a GET request  to /api
      const response = await fetch("/api");
      const result = await response.json();
      setProjects(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //function to add a new project to the list
  const addProject = async (newProject) => {
    try {
      //I made a Post request to /API to add a new project
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      const result = await response.json();
      setProjects(result);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  //Function to update a project in the list.
  const updateProject = async (id, updatedProject) => {
    try {
      //I made a PUT request to /api/:id to update a project
      const response = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedProject.title,
          description: updatedProject.description,
          url: updatedProject.url,
        }),
      });
      const result = await response.json();
      setProjects(result);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  //Function to delete a project from the list.
  const deleteProject = async (id) => {
    try {
      //I made a DELETE request to /api/:id to delete a project
      const response = await fetch(`/api/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      setProjects(result);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div>
      <h2>Project Portfolio</h2>
      {/*Form component for adding new projects*/}
      <Form addProject={addProject} />
      {/*Map through the list of projects and render an item component for each*/}
      {/*The component renders the heading, a Form component for adding new projects, and maps through the list of projects to render an item component for each project*/}
      {projects.map((project) => (
        <Item
          key={project.id}
          project={project}
          updateProject={updateProject}
          deleteProject={deleteProject}
        />
      ))}
    </div>
  );
};

export default ProjectList;
