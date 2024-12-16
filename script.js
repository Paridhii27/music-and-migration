document.addEventListener("DOMContentLoaded", () => {
  const genres = document.querySelectorAll(".genre-link");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  // Audio handling
  const audioElements = {};

  genres.forEach((genre) => {
    const audioSrc = genre.dataset.audio;
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audioElements[genre.dataset.modal] = audio;

    // Hover audio
    genre.addEventListener("mouseenter", () => {
      audio.play();
    });

    genre.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
    });

    // Modal handling
    genre.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = genre.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  // Close modal when clicking on close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      modal.style.display = "none";
    });
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
