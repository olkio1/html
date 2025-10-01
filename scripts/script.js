 const scroolBtn = document.querySelector(".scroll-top");
 scroolBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
 });