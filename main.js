function aboutMovie (json) {
      console.log(json);

    let title = document.querySelector('.originalTitle');
    title.textContent = json.results[0].title;

    let release = document.querySelector('.releaseDate');
    release.textContent = json.results[0].release_date;

    let avatar = document.querySelector('img');
    avatar.src = 'https://image.tmdb.org/t/p/w500' + json.results[0].poster_path ;
    }

    fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key +"&query=Jack+Reacher")
    .then(response => response.json())
    .then(aboutMovie);

    /*
    Movie Name = original_title
    Release Date = release_date
    Poster = poster_path = https://image.tmdb.org/t/p/w500/ 38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg
    Description = overview

    .results[0]
    */

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
