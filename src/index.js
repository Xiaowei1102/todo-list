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
const swim = new Todo("swim", "do it", "2023-09-28", "low");
const run = new Todo("run", "just run", "2023-09-27", "medium");
const gym = [swim, run];
const projectList = [];
const gymProject = new Project(gym, "Gym");
projectList.push(gymProject);
displayProject(gymProject);
displayProjectOnSidebar(gymProject);

//open project form on click
const addProject = document.querySelector(".project-button");
addProject.addEventListener("click", (e) => {
    openForm("#project-form", "flex");
});

//once click add, collect info from project form and display to the content container
const submitProject = document.querySelector(".submit-project");
submitProject.addEventListener("click", (e) => {
    //have to use the below command to stop the submit event otherwise, page will return not found
    e.preventDefault();
    closeForm("#project-form");
    const projectTitle = document.getElementById("project-title");
    const projectTitleClassName = projectTitle.value.toLowerCase().split(" ").join("");
    createAndAppend("div", projectTitleClassName, "project-item-container", projectTitle.value);
    //when project intially created, no todo list added yet, so we just clear the 
    document.querySelector(".content-project-title").innerHTML = projectTitle.value;
    //create a porject object according to project.js and add it to projectList
    const todoList = [];
    const projectObject = new Project(todoList, projectTitle.value);
    projectList.push(projectObject);
    //clear the container
   document.querySelector(".project-todo-container").replaceChildren();
   //clear the previous submit data in the form next time you open it
   document.getElementById("project-form").reset();
});

//add todo with "Add Todo" button
const addTodoList = document.querySelector(".todo-button");
addTodoList.addEventListener("click", (e) => {
    openForm("#todo-form", "flex");
});

//once cick add, collect infor from todo form and display to the content container
const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm("#todo-form");
    //collect info from input to create new todo object
    const todoTitle = document.getElementById("todo-title").value;
    const todoDetails = document.getElementById("todo-details").value;
    const tododueDate = document.getElementById("duedate").value;
    const todoPriority = document.getElementById("priority").value;
    const todo = new Todo(todoTitle, todoDetails, tododueDate, todoPriority);
    //push this todo item in the current ondisplay project
    let updatedProject;
    for (let project of projectList) {
        if (project.projectName === document.querySelector(".content-project-title").innerHTML) {
            project.todoList.push(todo);
            updatedProject = project;
        }
    }
    //display the updated project
    //clear the container
    document.querySelector(".project-todo-container").replaceChildren();
    displayProject(updatedProject);
    //clear the previous submit data in the form next time you open it
    document.getElementById("todo-form").reset();

});

// //DETAILS button implementation
// //instead of creating new element, i am just going to change the title innerHTML, not beautiful, but do not have to create new div and manipulate DOM
// const details = document.querySelectorAll(".todo-description");
// details.forEach(detail => {
//     detail.addEventListener("click", (e) => {
//         //find what todo item is clicked
//         const todoClassTag = e.target.className.split("-")[0];
//         //change its corresponding title with description
//         const toBeUpdatedTitle = document.querySelector(`${todoClassTag}-title todo-title`);
//         if (toBeUpdatedTitle.innerHTML.includes(":")) {
//             toBeUpdatedTitle.innerHTML = 
//         }
//     })
// });