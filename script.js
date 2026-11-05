const enterBtn = document.getElementById("enterBtn");
const backBtn = document.getElementById("backBtn");

enterBtn.addEventListener("click", function() {
    document.getElementById("welcome").scrollIntoView({
        behavior: "smooth"
    });

    document.body.classList.add("entered");
});

backBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
