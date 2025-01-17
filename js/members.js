document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".swiper", {
        grabCursor: true,
        speed: 500,
        effect: "fade",
        loop: true,
        clickable: true,
        mousewheel: {
            invert: false,
            sensitivity: 1,
        },
    });
    
    swiper.enable();
    
    // Sidebars
    
    const moreBtns = document.querySelectorAll(".more-btn");
    const closeBtns = document.querySelectorAll(".close-btn");
    const boxContainers = document.querySelectorAll(".box-container");
    const body = document.querySelector("body");
    const mobileBoxes = document.querySelectorAll(".box-mobile");
    
    moreBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
            body.classList.add("prevent-background-scroll");
            boxContainers.forEach((container) => {
                container.style.display = "none";
            });
        });
    });
    
    closeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let modal = (btn.closest(".sidebar").style.display = "none");
            body.classList.remove("prevent-background-scroll");
            boxContainers.forEach((container) => {
                container.style.display = "grid";
            });
        });
    });
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("sidebar")) {
            e.target.style.display = "none";
            body.classList.remove("prevent-background-scroll");
            boxContainers.forEach((container) => {
                container.style.display = "grid";
            });
        }
    });
    
    mobileBoxes.forEach((btn) => {
        btn.addEventListener("click", () => {
            let modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
            body.classList.add("prevent-background-scroll");
            boxContainers.forEach((container) => {
                container.style.display = "none";
            });
        });
    });
});
