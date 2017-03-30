// Wednesday, March 29
// 1. what is the total budget of the ten most popular movies in the db?
// let popularMovies = getData('movie/popular').then(json => console.log(json));
//
//
// 2. which genre has the highest average popularity for its top 20 movies?
//
// 3. which of the top 20 horror movies have no spoken language besides English?
//
// 4. who had the most starring roles in the top 20 comedies?
//
// 5. how many movies have the stars of the most popular movie of last year appeared in? (list each star's name with the number of movies)
//
// ****
//
// Expand your site to show more things.
// - when a user searches for a movie, show a list of recommended movies based on it.
//   - display the recommended movies only if they are more popular than the first movie
//
// */

// --------------------------------------------

/* WHAT DO YOU WANT TO DISPLAY
  LEVEL 1
  Movie Name = original_title
  Release Date = release_date
  Description = overview
  Poster = poster_path = https://image.tmdb.org/t/p/w500/ 38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg

  LEVEL 2
  Input Query
*/


function aboutMovie (json) {
      console.log(json);

    let title = document.querySelector('.originalTitle');
    title.textContent = json.results[0].title;

    let release = document.querySelector('.releaseDate');
    release.textContent = json.results[0].release_date;

    let description = document.querySelector('.movieDescription');
    description.textContent = json.results[0].overview;

    let avatar = document.querySelector('img');
    avatar.src = 'https://image.tmdb.org/t/p/w500' + json.results[0].poster_path;

    let inputButton = document.querySelector('button')
    //document.textContent = json.results[0].object;
    button.addEventListener('click', selectMovie);
    }

    fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key +"&query=Jack+Reacher")
    .then(response => response.json())
    .then(aboutMovie);


let button = document
/* SECTION 2 ATTEMPT
    var apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=";
    var apiKey = " + key +";
    var queryText = "&query=";
    //var input = "Jack+Reacher";

    // CHANGES TO input var selectMovie = "";

    function selection = () {
      var button = select('.submit');
      selection.addEventListener('click', submit);

      input = selectMovie('.submit');

    function
      var url = apiUrl + apiKey + queryText + input.value() ; //selectMovie
    }
*/
    // fetch("https://api.themoviedb.org/3/search/movie?api_key="+"key"+"&query="+"input.value")
    // .then(response => response.json())
    // .then(aboutMovie);



    //let json = { name: 'me', location: 'here'}
    // fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key +"&query=Jack+Reacher")
    //   .then(response => response.json())
    //   .then(aboutMovie);

// MY API FETCH LINK fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key +"&query=Jack+Reacher");

//EVERYONE LOVE CONCATENATION
// let str = 'chris' + ' another string';
// str would be 'chris another string'
/*
  function convertToJson (response) {
    return response.json();
  }

  function logJson (json) {
    console.log(json);
  }

  let firstPromise = fetch("https://api.github.com/users/bgates");
  console.log('first promise', firstPromise);

  let secondPromise = firstPromise.then(convertToJson);
  console.log('second promise', secondPromise);

  secondPromise.then(logJson);
  */


  // const sumArray = (a,b) => a + b;
  // function sumArray (a,b) {
  //   return 1 + b;
  // }
