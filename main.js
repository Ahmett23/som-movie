const MOVIE_API_KET = '8d4fc4fbfaba7e2a7fc50ca70657b0ba'
const API_URL ='https://api.themoviedb.org/3/movie/popular?'
const IMG_URL = 'https://image.tmdb.org/t/p/w1080'
// let mostPopular = document.querySelector(".most-popular"); 


let movieContainer = document.querySelector(".movie-container");
let ModelContainer = document.querySelector(".Model-container")
let close = document.querySelector(".close")
let movietitle = document.querySelector(".movie-title")
let movieDetail = document.querySelector(".movie-detail")
let modelImg = document.querySelector(".model-img")

let vote = document.querySelector(".vote")
let releas = document.querySelector(".releas")
            
// let videoPlayer = document.querySelector(".movie-video")




close.addEventListener("click", (e)=>{
    ModelContainer.classList = "Model-container hide"
})

movieContainer.addEventListener("click", (e)=>{
//    console.log(e.target.classList[0])
if(e.target.classList[0] == "movie-image"){

    movieDetail.innerHTML = e.target.parentElement.children[0].value
    movietitle.innerHTML = e.target.parentElement.children[2].children[0].textContent
    // modelImg.innerHTML
    //  modelImg.innerHTML = e.target.parentElement.children[1].src
    modelImg.src = e.target.parentElement.children[1].src;
  vote.innerHTML = e.target.parentElement.children[3].children[0].textContent
  releas.innerHTML= e.target.parentElement.children[3].children[1].textContent
// videoPlayer.src = e.target.parentElement.children[3].children[1].src;




    ModelContainer.classList = "Model-container show"

}
})











const bildTheDom =(results)=>{
    // mostPopular.innerHTML ="";
    results.forEach(movie =>{
        movieContainer.innerHTML += `
  <div class="movie">
      <input type="hidden" value="${movie.overview}">
      <img class="movie-image" src="https://image.tmdb.org/t/p/w500${movie.poster_path} alt="">
      <div class="infor">
           <span class="movie-title">${movie.title}</span>
      </div>
      <div class="counts">
          <div class="vote-averge">
              <span>${movie.vote_average}</span>
          </div>
          <div class="releas-date">
              <span>${movie.release_date}</span>
          </div>
      </div>
  </div>
`;

     
    })
}





const getMostPopularMovies = async ()=>{
     for (let page = 1; page <= 3; page++){
     const request = await fetch (`${API_URL}api_key=${MOVIE_API_KET}&page=${page}`);
     const {results} = await request.json();
    //  console.log("move_one",results[0]);
     bildTheDom(results);
}}
getMostPopularMovies();


// model-info


