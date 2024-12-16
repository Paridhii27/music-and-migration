document.addEventListener("DOMContentLoaded", () => {
  const genres = document.querySelectorAll(".blues, .hiphop, .reggae");

  genres.forEach((genre) => {
    const audio = new Audio(genre.dataset.audio);
    audio.loop = true;

    genre.addEventListener("mouseenter", () => {
      audio.play();
    });

    genre.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});
