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

// iOS autoplay fix
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach(function (video) {
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(function () {
                document.addEventListener("touchstart", function () {
                    video.play();
                }, { once: true });
            });
        }
    });
});
