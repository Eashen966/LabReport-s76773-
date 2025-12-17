let slideIndex = 0;

function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(s => s.style.display = "none");
    slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(startSlideshow, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    startSlideshow();

    document.querySelectorAll(".side-nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelectorAll(".collapsible-header").forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    const animated = new Set();

    window.addEventListener("scroll", () => {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            if (!animated.has(bar) && bar.getBoundingClientRect().top < window.innerHeight) {
                bar.style.width = bar.dataset.progress + "%";
                animated.add(bar);
            }
        });
    });
});
