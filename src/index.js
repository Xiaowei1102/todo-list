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

//global constant to exmaine when you click submit on the todo-form, is it originated from a addTo do button? or is it originated from an Edit button?
let addOrEdit = null;

//global constant to indicate which todo item is clicked
let todoClassTag = null;

//below is default project display
const swim = new Todo("swim", "do it", "2023-09-28", "low");
const run = new Todo("run", "just run", "2023-09-27", "medium");
const gym = [swim, run];
let projectList = [];
const gymProject = new Project(gym, "Gym");
projectList.push(gymProject);

//localStorage.removeItem("projectList");

//check localStorgage to see if we have already have saved states
if ((localStorage.getItem("deletetoempty") !== "yes") && (!localStorage.getItem("projectList")) ) {
    //this is when the starting localstorage has nothing but it's not due to deletion 
    displayProject(gymProject);
    //display projectList on sidebar
    displayProjectOnSidebar(gymProject);
} else {
    let projectListJSON = localStorage.getItem("projectList");
    projectList = JSON.parse(projectListJSON);
    displayProject(projectList[0]);
    //display projectList on sidebar
    for (let project of projectList) {
        displayProjectOnSidebar(project);
    }
}
//if we deleted the projet to empty, then do not need to show anything

//use below function to populate the localStorage
function populateLocalStorage() {
    const projectListJSON = JSON.stringify(projectList);
    localStorage.setItem("projectList", projectListJSON);
    if (projectList === null) {
        localStorage.setItem("deletetoempty", "yes");
    }
}

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
    //const projectTitleClassName = projectTitle.value.toLowerCase().split(" ").join("");
    // createAndAppend("div", `${projectTitleClassName}-container`, "project-item-container", null); 
    // createAndAppend("div", `${projectTitleClassName}-title`, `${projectTitleClassName}-container`, projectTitle.value);
    // createAndAppend("button", `${projectTitleClassName}-button`, `${projectTitleClassName}-container`, "X");
    //when project intially created, no todo list added yet, so we just clear the 
    document.querySelector(".content-project-title").innerHTML = projectTitle.value;
    //create a porject object according to project.js and add it to projectList
    const todoList = [];
    const projectObject = new Project(todoList, projectTitle.value);
    //populate the sidebar
    displayProjectOnSidebar(projectObject);
    projectList.push(projectObject);
    //populate the storage
    populateLocalStorage();
    //clear the container
   document.querySelector(".project-todo-container").replaceChildren();
   //clear the previous submit data in the form next time you open it
   document.getElementById("project-form").reset();
});

//add todo with "Add Todo" button
const addTodoList = document.querySelector(".todo-button");
addTodoList.addEventListener("click", (e) => {
    openForm("#todo-form", "flex");
    addOrEdit = "add";
});

//once cick add, collect infor from todo form and display to the content container
const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", (e) => {
    if (addOrEdit === "add") {
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
                //populate storage
                populateLocalStorage();
            }
        }
        //display the updated project
        //clear the container
        document.querySelector(".project-todo-container").replaceChildren();
        displayProject(updatedProject);
        //clear the previous submit data in the form next time you open it
        document.getElementById("todo-form").reset();
        addOrEdit = null;
    }
    if (addOrEdit === "edit") {
        e.preventDefault();
        closeForm("#todo-form");
        //collect info from input to update the current todo item
        const currentTodo = findClickedTodo(todoClassTag);
        currentTodo.title = document.getElementById("todo-title").value;
        currentTodo.description = document.getElementById("todo-details").value;
        currentTodo.dueDate = document.getElementById("duedate").value;
        currentTodo.priority = document.getElementById("priority").value;
        //after editing, populate the storage
        populateLocalStorage();
        const currentProject = findCLickedProject();
        //display the updated project
        //clear the container
        document.querySelector(".project-todo-container").replaceChildren();
        displayProject(currentProject);
        //clear the previous submit data in the form next time you open it
        document.getElementById("todo-form").reset();
        addOrEdit = null;
    } 

});

//if you cancel the form, then nothing should happen
const cancels = document.querySelectorAll(".close-project, .close-todo");
cancels.forEach(cancel => {
    cancel.addEventListener("click", (e) => {
        const projectOrTodo = e.target.className.split("-")[1];
        
        closeForm(`#${projectOrTodo}-form`);
    });
});



//DETAILS button implementation
//instead of creating new element, i am just going to add a description div initally for everyone, not beautiful, but do not have to create new div and manipulate DOM
//again, event delegation needs to be used because, we rewrite the todo list with edit or delete button
const detail = document.querySelector(".project-todo-container");
detail.addEventListener("click", (e) => {
    if (e.target.className.includes("todo-details")) {
        //find what todo item is clicked
        const todoClassTag = e.target.className.split(" ")[0];
        //change its corresponding title with description
        //for two classes, you need to separate them
        const toBeUpdatedTitle = document.querySelector(`.${todoClassTag}.todo-description`);
        if (toBeUpdatedTitle.innerHTML !== " ") {
            toBeUpdatedTitle.innerHTML = " ";
        } else {
            //need to find the current project todoList and match it
            const clickedTodo = findClickedTodo(todoClassTag);
            toBeUpdatedTitle.innerHTML = `${clickedTodo.priority} : ${clickedTodo.description}`;
        }
    }
})

//use this function to find the project that current clicked todo that belongs to

function findCLickedProject() {
    for (let project of projectList) {
        if (project.projectName === document.querySelector(".content-project-title").innerHTML) {
            return project;
        }
    }
}

//use this function to find the current hit todoList in the project list
function findClickedTodo (clickedClassNameTag) {
    let currentProject = findCLickedProject();
    
    for (let todo of currentProject.todoList) {
        if (todo.title.toLowerCase().split(" ").join("") === clickedClassNameTag) {
            return todo;
        }
    }
}

//implement Edit button 
const edit = document.querySelector(".project-todo-container");
edit.addEventListener("click", (e) => {
    if (e.target.className.includes("todo-edit")) {
        //find what todo item is clicked
        todoClassTag = e.target.className.split(" ")[0];
        //bringup the form
        openForm("#todo-form", "flex");
        addOrEdit = "edit";
    }
    

}); 

//implement Delete button
const deleteTodo = document.querySelector(".project-todo-container");
deleteTodo.addEventListener("click", (e) => {
    if (e.target.className.includes("todo-delete")) {
        //find what todo item is clicked
        todoClassTag = e.target.className.split(" ")[0];
        let currentTodo = findClickedTodo(todoClassTag);
        let currentProject = findCLickedProject(todoClassTag);
        //delete this todo from the project's todoList
        let index = currentProject.todoList.indexOf(currentTodo);
        if(index > -1) {
            currentProject.todoList.splice(index, 1);
            //change storage
            populateLocalStorage();
        }
        //then display
        document.querySelector(".project-todo-container").replaceChildren();
        displayProject(currentProject);
    }
    

}); 

//implement the project switch when click on sidebar
const sidebarProject = document.querySelector(".project-item-container");
sidebarProject.addEventListener("click", (e) => {
    //if you clicked the project list instaed of the container
    if (e.target.className.includes("title")) {
        //display that project list on the main content
        for (let project of projectList) {
            if (project.projectName === e.target.innerHTML) {
                document.querySelector(".content-project-title").innerHTML = project.projectName;
                document.querySelector(".project-todo-container").replaceChildren();
                displayProject(project);
            }
        }
        
    }
});

//implement the delete project button on the side bar

sidebarProject.addEventListener("click", (e) => {
    //if you clicked the project list instaed of the container
    if (e.target.className.includes("button")) {
        //delete that project list on sidebar
        for (let project of projectList) {
            if (project.projectName.toLowerCase().split(" ").join("") === e.target.className.split("-")[0]) {
                //found the projectObject
                //if the object is ondisplay right now, get rid of it first;
                if (project.projectName === document.querySelector(".content-project-title").innerHTML) {
                    document.querySelector(".content-project-title").innerHTML = " ";
                    document.querySelector(".project-todo-container").replaceChildren();                   
                }
                let index = projectList.indexOf(project);
                if (index > -1) {
                    projectList.splice(index, 1);
                    //populate the storage
                    populateLocalStorage();
                }
            }
        }
        //clear sidebar project
        document.querySelector(".project-item-container").replaceChildren();
        //display the projectList;
        for (let project of projectList) {
            displayProjectOnSidebar(project);
        }
        //then display on the main content with the first element from the projectList
        
    }
});