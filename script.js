document.addEventListener('DOMContentLoaded',()=>{
    const hamburger = document.querySelector(".hamburger");
    const navUL = document.querySelector(".nav-links");
    hamburger.addEventListener('click',()=>{
        navUL.classList.toggle('show');
    })
    console.log("Helloooooooo");
})