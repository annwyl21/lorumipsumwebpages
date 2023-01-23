// declare a variable that is the title of the current document
let pageTitle = document.title;

// 2 arrow function expressions
// function called blur called by the event of the user navigating away from the page in the <title> tag in the window object (not the document object hence window. rather than document.)
window.addEventListener("blur", () => {
    document.title = "Lorem Ipsum";
});

// the 2nd arrow function expression is a function called focus
window.addEventListener("focus", () => {
    document.title = pageTitle
});

