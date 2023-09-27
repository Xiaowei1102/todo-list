import { Todo } from "./todo";
import { Project } from "./projet";

//show the project and its todo list on the right side

//use this funciton to create and add element to DOM
//if you need to insert after specific element, turn on the flag
function createAndAppend(elementType, className, parentElementClassName, insertAfterFlag, insertAfterElementClass, textContent) {
    const child = document.createElement(elementType);
    if (className != null) {
        let classNameList = className.toLowerCase().split(" ");
        
        for (let name of classNameList) {
            child.classList.add(name);
        }
    }
    //because calssName can be uppercases
    let parent = document.getElementsByClassName(parentElementClassName.toLowerCase())[0];
    if (insertAfterFlag) {
        document.getElementsByClassName(parentElementClassName.toLowerCase())[0].insertBefore(child, document.getElementsByClassName(insertAfterElementClass)[0].nextSibling);
    } else {
        document.getElementsByClassName(parentElementClassName.toLowerCase())[0].appendChild(child);
    }
    if (textContent) {
        child.innerHTML = textContent;
    }
}


function displayProject(projectObject) {
    const projectTodoContainerClassName = `${projectObject.projectName.toLowerCase().split(" ").join("")}-todo-container`;
    createAndAppend("div", projectTodoContainerClassName, "content-container", true, "content-title", null);
    // const projectDiv = document.createElement("div");
    // projectDiv.classList.add(`${projectName}-todo-container`);
    // //insert this div after the content-title div
    // document.querySelector(".content-container").insertBefore(projectDiv,document.querySelector(".content-title").nextSibling);

    //it is let of not let in ugh...
    for (let todo of projectObject.project) {
        const todoContainer = `${todo.title}-container todo-container`;
        createAndAppend("div", todoContainer, projectTodoContainerClassName, false, null, null);
        // const todoDiv = document.createElement("div");
        // const todoContainer = todoDiv.classList.add(`${todo.title}-container`);
        // projectDiv.appendChild(todoContainer);

        const todoShownItems = ["title", "description", "duedate", "edit", "delete"];
        const textContentItems = [todo.title, "DETAILS", todo.dueDate, "Edit", "DELETE"]
        for (let i = 0; i < todoShownItems.length; i++) {
            if (i === 0 || i === 2) {
                createAndAppend("div", `${todo.title}-title todo-${todoShownItems[i]}`, todoContainer, false, null, textContentItems[i]);
            } else {
                createAndAppend("button", `${todo.title}-title todo-${todoShownItems[i]}`, todoContainer, false, null, textContentItems[i]);
            }
        }

        // createAndAppend("div", `${todo.title}-title todo-title`, projectTodoContainerClassName, false, null);
        // createAndAppend("button", `${todo.title}-description todo-description`, projectTodoContainerClassName, false, null);
        // createAndAppend("div", `${todo.title}-dueDate todo-dueDate`, projectTodoContainerClassName, false, null);
        // createAndAppend("button", `${todo.title}-edit todo-edit`, projectTodoContainerClassName, false, null);
        // createAndAppend("button", `${todo.title}-delete todo-delete`, projectTodoContainerClassName, false, null);
    }
}

function displayProjectOnSidebar(projectObject) {
    //two spelling error here cost half an hour debugging...
    createAndAppend("div", projectObject.projectName, "project-item-container", false, null, projectObject.projectName);
}

export {createAndAppend, displayProject, displayProjectOnSidebar};