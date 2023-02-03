let pageTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Ellen's Website";
});

window.addEventListener("focus", () => {
    document.title = pageTitle
});

// Solution
// Declares and assigns a variable that is equal to the title of the current page
// Uses 2 javascript arrow function expressions in functions called; blur and focus
// Blur is called through the event of the user navigating away from the page in the <title> tag in the window object (not the document object hence window. rather than document.)
// Focus is called through the event of the user navigating back to the page and returns the title tag to the main title
