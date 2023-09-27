import { Todo } from "./todo"; 
import './style.css';
import { createAndAppend, displayProject, displayProjectOnSidebar } from "./page-load";
import { openForm, closeForm } from "./addProject";
import { Project } from "./projet";

// const project = [];
// const study = new Todo("study", "", "9/29", "low");
// study.setComplete(true);
// study.changePriority("high");
// project.push(study);
// console.log(project[0]);

//below is default project display
const swim = new Todo("swim", "do it", "9/25", "low");
const run = new Todo("run", "just run", "9/26", "medium");
const gym = [swim, run];
const projectList = [];
const gymProject = new Project(gym, "Gym");
projectList.push(gymProject);
displayProject(gymProject);
displayProjectOnSidebar(gymProject);


const addProject = document.querySelector(".project-button");

addProject.addEventListener("click", (e) => {
    openForm("#project-form", "flex");
});

//once click add, collect info from project form and display to the content container
const submitProject = document.querySelector(".submit-project");
submitProject.addEventListener("click", (e) => {
    //have to use the below command to stop the submit event otherwise, page will return not found
    e.preventDefault();
    const projectTitle = document.getElementById("project-title");
    const projectTitleClassName = projectTitle.value.toLowerCase().split(" ").join("");
    createAndAppend("div", projectTitleClassName, "project-item-container", false, null, projectTitle.value);
    //when project intially created, no todo list added yet, so we just clear the 
    document.querySelector(".content-project-title").innerHTML = projectTitle.value;
    //create a porject object according to project.js and add it to projectList
    const project = [];
    const projectObject = new Project(project, projectTitle.value);
    projectList.push(projectObject);
    
});

//