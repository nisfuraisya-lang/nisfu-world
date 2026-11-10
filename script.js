// AMBIL TOMBOL
const enterBtn = document.getElementById("enterBtn");
const backBtn = document.getElementById("backBtn");

// TOMBOL ENTER
if (enterBtn) {
    enterBtn.addEventListener("click", function() {

        document.getElementById("welcome").scrollIntoView({
            behavior: "smooth"
        });

        document.body.classList.add("entered");
    });
}

// TOMBOL BACK TO TOP
if (backBtn) {
    backBtn.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// EFEK BINTANG DAN HATI SAAT DIKLIK
document.addEventListener("click", function(event) {

    const symbols = ["✦", "✧", "♡", "♥️", "✨"];

    for (let i = 0; i < 7; i++) {

        const effect = document.createElement("span");

        effect.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        effect.className = "click-star";

        effect.style.left = event.clientX + "px";
        effect.style.top = event.clientY + "px";

        const x = (Math.random() - 0.5) * 120;
        const y = (Math.random() - 0.5) * 120;

        effect.style.setProperty("--x", x + "px");
        effect.style.setProperty("--y", y + "px");

        document.body.appendChild(effect);

        setTimeout(function() {
            effect.remove();
        }, 1000);
    }
});
