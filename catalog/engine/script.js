if (document.documentElement.classList.contains("js")) {
  const movies = document.querySelectorAll(".movies img");
  const contents = document.querySelectorAll(".content");

  movies.forEach((movie) => {
    movie.addEventListener("click", () => {
      movies.forEach((img) => img.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));
      movie.classList.add("active");
      const classlist = movie.classList[0];

      contents.forEach((content) => {
        if (content.classList.contains(classlist))
          content.classList.add("active");
      });
    });
  });

  const button1 = document.querySelector(".button-slide .part1");
  const button2 = document.querySelector(".button-slide .part2");
  const movieSlides = document.querySelectorAll(".movies");

  button2.addEventListener("click", () => {
    if (button1.classList.contains("off")) {
      button1.classList.remove("off");
    }
    button2.classList.add("off");
    movieSlides.forEach((slide) => slide.classList.remove("active"));
    movieSlides[1].classList.add("active");
  });

  button1.addEventListener("click", () => {
    if (button2.classList.contains("off")) {
      button2.classList.remove("off");
    }
    button1.classList.add("off");
    movieSlides.forEach((slide) => slide.classList.remove("active"));
    movieSlides[0].classList.add("active");
  });
}
