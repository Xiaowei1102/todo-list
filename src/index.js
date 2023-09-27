import { Todo } from "./todo"; 
import './style.css';
import { displayProject } from "./page-load";

// const project = [];
// const study = new Todo("study", "", "9/29", "low");
// study.setComplete(true);
// study.changePriority("high");
// project.push(study);
// console.log(project[0]);

const swim = new Todo("swim", "do it", "9/25", "low");
const run = new Todo("run", "just run", "9/26", "medium");
const Gym = [swim, run];
displayProject(Gym, "Gym");