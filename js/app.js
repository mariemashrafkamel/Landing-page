/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 * <li>
                    <a href="#section1">Section 1</a>
                </li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#section3">Section 3</a></li>
                <li><a href="#section4">Section 4</a></li>
                <li><a href="#section5">Section 5</a></li>
 */
var active = document.getElementsByTagName("section");
var secs = document.getElementsByClassName("sec");
// Build menu 
var ull = document.getElementById("navbar__list");



for (var i = 1; i < 6; i++) {
    var tag = document.createElement("li");
    var tag_a = document.createElement("a");

    tag_a.href = "#section" + i;
    tag_a.innerText = "section" + i;

    tag.appendChild(tag_a);
    ull.appendChild(tag);

}
// Scroll to section on link click

// Set sections as active



for (var i = 0; i < secs.length; i++) {
    secs[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("your-active-class");
        current[0].className = current[0].className.replace(" your-active-class", "");
        this.className += " your-active-class";
    });
}

var top = document.getElementById("top");
window.onscroll = function() { scroll_down() };

function scroll_down() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top.style.display = "block";
    } else {
        top.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollWin() {
    window.scrollTo(0, 0);
}