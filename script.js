function toggleMusic() {
    const music = document.getElementById("background-music");
    const toggle = document.getElementById("music-toggle");
    if (toggle.checked) {
        music.play();
    } else {
        music.pause();
    }
}
