window.onscroll = function() {scrollnavbar()};

function scrollnavbar(){
    var navbar = document.getElementsByTagName("nav");
    console.log(navbar);
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log("scrolling");
        navbar[0].style.backgroundColor = "rgb(202, 204, 206)";
        navbar[0].style.position = "fixed";
        
    } else {
        navbar[0].style.backgroundColor = "";
        navbar[0].style.position = "";
    }
}
