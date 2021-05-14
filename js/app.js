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
    let list_id = "nav-list" + i;
    //add id=section i and class=section i
    //tag.setAttribute("id", list_id);
    tag.setAttribute("class", list_id);
    tag_a.href = "#section" + i;
    tag_a.innerText = "section " + i;

    tag.appendChild(tag_a);
    ull.appendChild(tag);
    let sec_target = document.getElementById("section" + i);
    let li_target = document.getElementById(list_id);

}

let lii = document.getElementsByTagName('li');


// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (let i = 0; i < 5; i++) {
        const box = secs[i].getBoundingClientRect();
        // You can play with the values in the "if" condition to further make it more accurate. 
        if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on the current section and the corresponding Nav link.
            secs[i].classList.add("your-active-class");
            lii[i].classList.add("active");

        } else {
            // Remove active state from other section and corresponding Nav link.
            secs[i].classList.remove("your-active-class");
            lii[i].classList.remove("active");
        }
        // console.log(i);
    }
}

// Make sections active
document.addEventListener("scroll", function() {
    makeActive();
});
/*
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
let section = document.querySelectorAll('section');
let a_href = document.getElementsByTagName('a');
// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const sec of secs) {
        const box = sec.getBoundingClientRect();
        // You can play with the values in the "if" condition to further make it more accurate. 
        if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on the current section and the corresponding Nav link.
            // a_href.classList.add('active');
            console.log(box);
        } else {
            // Remove active state from other section and corresponding Nav link.
            console.log(box);
        }
    }
}
// Scroll to section on link click


document.addEventListener("scroll", function() {
    makeActive();
});



for (let i = 0; i < secs.length; i++) {
    secs[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("your-active-class");
        current[0].className = current[0].className.replace(" your-active-class", "");
        this.className += " your-active-class";
        //secs[i].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    });
}


*/
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


//hide nav bar while scrolling down
scrollToTopBtn.addEventListener("click", scrollToTop)

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