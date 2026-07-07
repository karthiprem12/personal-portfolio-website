/* ==========================
   ACTIVE NAV LINK ON SCROLL
========================== */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};


/* ==========================
   STICKY NAVBAR SHADOW
========================== */

let header = document.querySelector("nav");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});


/* ==========================
   SMOOTH SCROLL (OPTIONAL)
========================== */

navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth"
        });
    });
});


/* ==========================
   SIMPLE TEXT TYPING EFFECT
========================== */

const roles = ["Web Developer", "Frontend Developer", "Designer"];
let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeEffect(){
    if(charIndex < roles[roleIndex].length){
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){
    if(charIndex > 0){
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(typingElement){
        typeEffect();
    }
});