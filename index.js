const movieName = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const btnSave = document.querySelector("#btnSave");
const form = document.querySelector("form");
const moviesContainer = document.querySelector(".movies");
const movies = [];

form.onsubmit = function (event) {
  event.preventDefault();

  movies.push({
    name: movieName.value,
    description: description.value,
    image: image.value,
  });

  /*
   moviesContainer.innerHTML += `
  <div class="card">
    <h2>${movieName.value}</h2>
    <p>${description.value}</p>
    <img  src=${image.value} />
  </div>`;
  */
  renderMovies();
  description.value = "";
  movieName.value = "";
  image.value = "";
};

function renderMovies() {
  if (movies.length === 0) return;

  moviesContainer.innerHTML ="";
  movies.forEach((movie) => {
    moviesContainer.innerHTML += `
        <div class="card">
            <h2>${movie.name}</h2>
            <p>${movie.description}</p>
            <img  src=${movie.image} />
        </div>
        `;
  });
}
