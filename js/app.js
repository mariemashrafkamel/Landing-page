/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
const active = document.getElementsByTagName("section");
const secs = document.getElementsByClassName("sec");
// Build menu 
let ull = document.getElementById("navbar__list");



// build the nav


for (let i = 1; i < 6; i++) {
    let tag = document.createElement("li");
    let tag_a = document.createElement("a");

    tag_a.href = "#section" + i + ' ';
    /*tag_a.addEventListener("click", function() {
    //document.getElementByClassName("active").style.color = "white";
    console.log("hello");
}); */
    tag_a.innerText = "section " + i;

    tag.appendChild(tag_a);
    tag.classList.add("not-active")
    ull.appendChild(tag);
    tag_a.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

// Add class 'active' to section when near top of viewport

let lii = document.getElementsByTagName('li');

lii[0].classList.add("active");

for (let i = 0; i < lii.length; i++) {
    lii[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        //secs[i].style.background = "red";

    });
}

// Scroll to section on link click

// Set sections as active



for (let i = 0; i < secs.length; i++) {
    secs[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("your-active-class");
        current[0].className = current[0].className.replace(" your-active-class", "");
        this.className += " your-active-class";
        secs[i].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });


    });

    //secs[i].style.background = "none";

}

//var of scroll to top button
let scrollToTopBtn = document.getElementById("scrollToTopBtn")
let rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

//hide nav bar while scrolling down
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar__list").style.top = "0";
    } else {
        document.getElementById("navbar__list").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}