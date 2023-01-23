let pageTitle = document.title;

// 2 arrow function expressions
// function blur
window.addEventListener("blur", () => {
    document.title = "Lorem Ipsum";
});

// function focus
window.addEventListener("focus", () => {
    document.title = pageTitle
});
