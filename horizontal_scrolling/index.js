let scrollContainer = document.querySelector(".gallery");
let backBtn         = document.getElementById("previous");
let nextBtn         = document.getElementById("next");


nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900; 
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
}) 