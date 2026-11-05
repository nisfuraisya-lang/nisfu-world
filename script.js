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
document.addEventListener("click", function (event) {
  for (let i = 0; i < 6; i++) {
    const star = document.createElement("span");

    star.textContent = "✦";
    star.className = "click-star";

    star.style.left = event.clientX + "px";
    star.style.top = event.clientY + "px";

    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 120;

    star.style.setProperty("--x", x + "px");
    star.style.setProperty("--y", y + "px");

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 800);
  }
});
