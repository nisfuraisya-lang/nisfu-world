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
// CLICK STAR EFFECT
document.addEventListener("click", function(e) {

    const stars = ["✦", "✧", "★", "✶", "✷"];

    for (let i = 0; i < 5; i++) {

        const star = document.createElement("span");

        star.innerHTML =
            stars[Math.floor(Math.random() * stars.length)];

        star.classList.add("click-star");

        star.style.left = e.clientX + "px";
        star.style.top = e.clientY + "px";

        star.style.setProperty(
            "--move-x",
            (Math.random() - 0.5) * 120 + "px"
        );

        star.style.setProperty(
            "--move-y",
            (Math.random() - 0.5) * 120 + "px"
        );

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 900);
    }

});
