function openpage(page) {
    window.location.href = page;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

 document.querySelectorAll("video").forEach(video => {
video.muted = true;
video.setAttribute("playsinline", "");
video.setAttribute("webkit-playsinline", "");
video.play().catch(() => {});
});  

