/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
var active = document.getElementsByTagName("section");
var secs = document.getElementsByClassName("sec");
// Build menu 
var ull = document.getElementById("navbar__list");




/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


for (var i = 1; i < 6; i++) {
    var tag = document.createElement("li");
    var tag_a = document.createElement("a");
    //var br = document.createElement("pre");

    tag_a.href = "#section" + i + ' ';
    tag_a.innerText = "section " + i;

    tag.appendChild(tag_a);
    //ull.appendChild(br);
    ull.appendChild(tag);


}
// Add class 'active' to section when near top of viewport




// Scroll to section on link click

// Set sections as active



for (var i = 0; i < secs.length; i++) {
    secs[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("your-active-class");
        current[0].className = current[0].className.replace(" your-active-class", "");
        this.className += " your-active-class";
    });
}

//var of scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

//hide nav bar while scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar__list").style.top = "0";
    } else {
        document.getElementById("navbar__list").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}