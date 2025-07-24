const addMovieBtn = document.getElementById("addMovieBtn");
const displayMovieList = document.getElementById("displayMovieList");
const searchMovie = document.getElementById("searchMovie");

const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
revealtheMovieList();

addMovieBtn.addEventListener('click', (e)=>{
    const movieName = document.getElementById("movieName").value.trim();
    const releaseDate = document.getElementById("releaseDate").value.trim();
    const movieSummary = document.getElementById("movieSummary").value.trim();
    const movieMainCharacter = document.getElementById("movieMainCharacter").value.trim();
      

    let movieDetails = {movieName,releaseDate,movieSummary,movieMainCharacter};
    watchedMovies.unshift(movieDetails);


    document.getElementById("movieName").value ="";
    document.getElementById("movieName").value ="";
    document.getElementById("movieName").value ="";
    document.getElementById("movieName").value ="";
localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
revealtheMovieList();
});

searchMovie.addEventListener('input',revealtheMovieList);

function revealtheMovieList() {
    displayMovieList.innerHTML = "";
    const searchedMovie = searchMovie.value.toLowerCase();
    watchedMovies.forEach((element,index) => {
     if(!element.movieName.toLowerCase().includes(searchedMovie)) return;
       const movieLayout = document.createElement("div");
       movieLayout.className = "movie-list-style";
       movieLayout.innerHTML = `
       <h4>This is another Watched Movie</h4>
       <pre><strong>Movie Name:</strong>${element.movieName}</pre>
       <pre><strong>Date Released:</strong>${element.releaseDate}</pre>
       <pre><strong>Movie Summary:<br></strong>${element.movieSummary}</pre>
       <pre><strong>The Main Character:</strong>${element.movieMainCharacter}</pre>
       <button onclick="deleteMovie(${index})">Delete movie</button>
       `;
       displayMovieList.appendChild(movieLayout);
    });

}
function deleteMovie(index) {
    watchedMovies.splice(index, 1);
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    revealtheMovieList();
}
