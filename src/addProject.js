function openForm(selctor, displayStyle) {
    document.querySelector(selctor).style.display = displayStyle;
}

function closeForm(selctor) {
    document.querySelector(selctor).style.display = "none";
}


export {openForm, closeForm};