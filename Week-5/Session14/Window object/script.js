function displayWindowProperties() {
    console.log("User Agent:", window.navigator.userAgent);
    console.log("Screen Width:", window.screen.width);
    console.log("Screen Height:", window.screen.height);
    console.log("Current URL:", window.location.href);
    console.log("Pathname:", window.location.pathname);
    console.log("Session Storage Data:", window.sessionStorage.getItem("data"));
    console.log("Local Storage Data:", window.localStorage.getItem("data"));
}

window.addEventListener("load", displayWindowProperties);