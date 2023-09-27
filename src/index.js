import { Todo } from "./todo"; 
import './style.css';

const project = [];
const study = new Todo("study", "", "9/29", "low");
study.setComplete(true);
study.changePriority("high");
project.push(study);
console.log(project[0]);