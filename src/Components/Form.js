import React, { useState, useEffect } from "react";

const Form = ({ project, addProject, onSubmit }) => {
  //State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
  });

  //Effect to update form data when the project prop changes.
  useEffect(() => {
    if (project) {
      //If a project is provided, populate the form with project data
      setFormData({
        title: project.name || "",
        description: project.description || "",
        url: project.url || "",
      });
    }
  }, [project]);

  //Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    //Update form data with the new input value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handle for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (project) {
      //If a project is provided, it calls the OnSubmit prop with the update form data.
      onSubmit(formData);
    } else {
      //If no project is provided, it creates a new project with a unique ID and the form data, then calls the addProject prop.
      const newProject = {
        id: new Date().getTime(),
        ...formData,
      };
      addProject(newProject);
    }
    // Clear the form after submission
    setFormData({
      title: "",
      description: "",
      url: "",
    });
  };

  //The component renders a form with input fields for title, description and Url.
  //The button label is dynamic based on weather a project is provided.
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Url:
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </label>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button type="submit"> {project ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default Form;
