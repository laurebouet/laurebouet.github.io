
var menubar = document.getElementById("menubar")
var menucross = document.getElementById("menucross")
console.log(menubar)
console.log(menucross)

menubar.addEventListener("click", ()=> {
    console.log("click")
    menubar.style.backgroundColor = "red"
    menucross.style.display = "block"
});

