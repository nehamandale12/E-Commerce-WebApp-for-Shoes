let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

/*read more button*/


function showContent() {
    var content = document.querySelector('.content');
    var btn = document.querySelector('.read-more-btn');

    if (content.classList.contains('show-content')) {
        // Hide content
        content.classList.remove('show-content');
        btn.innerHTML = 'Read More';
    } else {
        // Show content
        content.classList.add('show-content');
        btn.innerHTML = 'Read Less';
    }
}

    document.addEventListener("DOMContentLoaded", function() {
        const readMoreLink = document.querySelector(".btn");
        const moreInfoDiv = document.querySelector(".more-info");

        readMoreLink.addEventListener("click", function(event) {
            event.preventDefault();
            if (moreInfoDiv.style.display === "none") {
                moreInfoDiv.style.display = "block";
            } else {
                moreInfoDiv.style.display = "none";
            }
        });
    });
