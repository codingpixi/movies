
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
