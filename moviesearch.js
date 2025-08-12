
document.addEventListener("DOMContentLoaded", () => {
const searchMovieBtn = document.getElementById("searchMovieBtn");
const movieDetails = document.getElementById("movieDetails");

searchMovieBtn.addEventListener("click", searchMovie);

async function searchMovie() {
    const searchMovieTitle = document.getElementById("searchMovie").value.trim();
    if (!searchMovieTitle) {
        movieDetails.innerHTML = "<p class='error'>Please enter a movie title.</p>";
        return;
    }
    movieDetails.innerHTML = "<p class='success'>Searching Movie...</p>";

    try {
        const apiKey = "664cbaae";
        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(searchMovieTitle)}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch Movie data.");
        }

        const data = await response.json();
        if (data.Response === "False") {
            movieDetails.innerHTML = `<p class='error'>${data.Error}</p>`;
            return;
        }
        console.log(data);

        movieDetails.innerHTML = `
        <div>
            <h2>${data.Title} (${data.Year})</h2>
            <img src="${data.Poster}" alt="Poster of ${data.Title}" class="movie-poster">
            <p><strong>Director:</strong> ${data.Director}</p>
        </div>
        <div class="movie-info">
            <p><strong>Released:</strong> ${data.Released}</p>  
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Runtime:</strong> ${data.Runtime}</p>
            <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
        </div>
        `;
    } catch (error) {
        movieDetails.innerHTML = `<p class='error'>Error: ${error.message}</p>`;
    }
}

})