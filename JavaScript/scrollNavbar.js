window.onscroll = function() {scrollnavbar()};

function scrollnavbar(){
    var navbar = document.getElementsByTagName("nav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // console.log("scrolling");
        // navbar[0].style.backgroundColor = "rgb(202, 204, 206)";
        navbar[0].classList.add("body");
        navbar[0].classList.add("fixed-top");
        // navbar[0].style.position = "fixed";
        
    } else {
        // navbar[0].style.backgroundColor = "";
        navbar[0].classList.remove("body");
        // navbar[0].classList.remove("fixed-top");
        // navbar[0].style.position = "";
    }
}
