fetch("./pages/header.html")
//fetch("https://edup217.github.io/wdd230/templeInn/pages/header.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("./pages/footer.html")
//fetch("https://edup217.github.io/wdd230/templeInn/pages/footer.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("footer").innerHTML = data;
});