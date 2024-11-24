// Predefined movie data
const movies = [
  { title: "Spider", year: 2002, rating: 6.7 },
  { title: "Bat", year: 2004, rating: 8.7 },
  { title: "Super", year: 2006, rating: 7.7 },
];

// Save movies to local storage
function saveMoviesToLocalStorage() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// Load movies from local storage
function loadMoviesFromLocalStorage() {
  const storedMovies = localStorage.getItem("movies");
  return storedMovies ? JSON.parse(storedMovies) : [];
}

// Display movies
function displayMovies(moviesToDisplay) {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // Clear previous content

  if (moviesToDisplay.length === 0) {
    movieList.innerHTML = "<p>No movies found. Try another search!</p>";
    return;
  }

  moviesToDisplay.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
    `;
    movieList.appendChild(movieElement);
  });
}

// Search movies by title, year, or rating
function searchMovies() {
  const titleQuery = document.getElementById("search-title").value.trim().toLowerCase();
  const yearQuery = document.getElementById("search-year").value.trim();
  const ratingQuery = parseFloat(document.getElementById("search-rating").value.trim());
  const errorMsg = document.getElementById("error-msg");
  errorMsg.textContent = ""; // Clear previous error messages

  const allMovies = loadMoviesFromLocalStorage();

  // Filter movies based on the queries
  const filteredMovies = allMovies.filter((movie) => {
    let match = true;

    // Search by title if query is provided
    if (titleQuery && !movie.title.toLowerCase().includes(titleQuery)) {
      match = false;
    }

    // Search by year if query is provided
    if (yearQuery && movie.year !== parseInt(yearQuery)) {
      match = false;
    }

    // Search by rating if query is provided
    if (ratingQuery && movie.rating < ratingQuery) {
      match = false;
    }

    return match;
  });

  // Handle case where no movies match
  if (filteredMovies.length === 0) {
    errorMsg.textContent = "No movies found with the given criteria.";
    displayMovies([]); // Clear results
    return;
  }

  // Display the filtered movies
  displayMovies(filteredMovies);

  // Store the last searched movie for recommendations
  window.lastSearchedMovie = filteredMovies[filteredMovies.length - 1];
}

// Recommend movies released after the last searched movie
function recommendMovies() {
  if (!window.lastSearchedMovie) {
    alert("Please perform a search first to get recommendations.");
    return;
  }

  const allMovies = loadMoviesFromLocalStorage();
  const recommendedMovies = allMovies.filter((movie) => movie.year > window.lastSearchedMovie.year);

  // Display recommended movies
  displayMovies(recommendedMovies);
}

// Initialize the app
function initApp() {
  if (!localStorage.getItem("movies")) {
    saveMoviesToLocalStorage(); // Save predefined movies on first load
  }
  displayMovies(loadMoviesFromLocalStorage());
}

// Event listener for the search button
document.getElementById("search-btn").addEventListener("click", searchMovies);

// Event listener for the recommend button
document.getElementById("recommend-btn").addEventListener("click", recommendMovies);

// Initialize the app when the page loads
window.addEventListener("DOMContentLoaded", initApp);
