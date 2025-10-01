 const scroolBtn = document.querySelector(".scroll-top");
 scroolBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
 });
 
 const scroolBtnDown = document.querySelector(".scroll-down");
 scroolBtnDown.addEventListener("click", () => {
    window.scrollTo({
        bottom: 0
    });
 });