//Import the body-parser middleware for handing JSON in request body
const bodyParser = require("body-parser");
//Import the express framework
const express = require("express");
//Create an Express app
const app = express();
//Set the port number for the server
const port = 8080;
//Import the fs module to work with the file system
const fs = require("fs");
//Import the path module
const path = require("path");

//Array to store web projects
let webProjects;
//Use path.join to create the absolute file path
const filePath = path.join(__dirname, "webProjects.json");
//Middleware to parse JSON in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Try to read existing data from web.Project at server startup
try {
  //Read the raw data from the file
  const rawData = fs.readFileSync("webProjects.json");
  //Parse the raw data into a JavaScript array
  webProjects = JSON.parse(rawData);
} catch (error) {
  //If the file doesn't exist or there is an error parsing it, log the error
  console.log("Error:", error.message);
  //If the file doesn't exist or there is an error parsing it, initialize with an empty array
  webProjects = [];
}

//I used APP.GET() to retrieve the list of web projects.
app.get("/api", (_, res) => {
  //log that a GET request has been received
  console.log("GET request received");
  //log the current content of the webProjects array
  console.log("Sending response:", webProjects);
  //Send a Json response with the current content of the web webProject array
  res.json(webProjects);
});

//APP.POST() Add a new web project to the list
app.post("/api", (req, res) => {
  //Extract data from the request body
  const data = {
    id: generateUniqueId(),
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
  };
  //Create a new project object using the extracted data
  const newProject = data;
  // //Add a new project to the list of web projects
  webProjects.push(newProject);
  //Write the update list of the web projects to webProject.json
  fs.writeFileSync(filePath, JSON.stringify(webProjects));
  //Send the response with the updated list of projects
  res.json(webProjects);
});

//APP.DELETE() Deletes a web project based on its title
app.delete("/api/:title", (req, res) => {
  //Convert title from the request parameters to a string
  const projectTitle = parseInt(req.params.title);
  //Find the index of the project with the specified title in the webProjects array
  const projectIndex = webProjects.findIndex(
    (project) => project.id === projectTitle
  );
  //If the index is not -1 remove the project from the array
  if (projectIndex !== -1) {
    webProjects.splice(projectIndex, 1);
    //Write the update list to webProject.json
    fs.writeFileSync(filePath, JSON.stringify(webProjects));
    //Send the response with the update list of projects
    res.json(webProjects);
  } else {
    //If the project with the given title is not found, return a 404 error
    res.status(404).json({ error: "Project not found" });
  }
});

//APP.PUT() Update a web project based on its Title
app.put("/api/:title", (req, res) => {
  //I Converted title to a string
  const projectTitle = parseInt(req.params.title);
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  //Find the project with the specified Title in the webProjects array
  const projectIndex = webProjects.findIndex(
    (project) => project.id === projectTitle
  );
  if (projectIndex !== -1) {
    webProjects[projectIndex].title = title;
    webProjects[projectIndex].description = description;
    webProjects[projectIndex].url = url;
    //Write the update list to webProject.json
    fs.writeFileSync(filePath, JSON.stringify(webProjects));
    //Send the response with the update list of project
    res.json(webProjects);
  } else {
    //If the project with the given Id is not found, return a 404 error
    res.status(404).json({ error: "Project not found" });
  }
});

//Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//Function to generate a unique ID for a new project
function generateUniqueId() {
  //Find the highest existing ID in the webProjects array
  const highestId = webProjects.reduce((maxId, project) => {
    //Parse the project ID to an integer
    const currentId = parseInt(project.id);
    //Return the higher value between the current project ID and the maximum ID
    return currentId > maxId ? currentId : maxId;
  }, 0);
  //Increment the highest ID by 1 to generate a new unique ID
  return highestId + 1;
}
