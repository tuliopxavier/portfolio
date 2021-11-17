fetch('https://api.github.com/users/tuliopxavier')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let userData = data;
    console.log(userData.name);
  })
  .catch((err) => {
    console.log('error while trying to get usar data: ' + err);
  });
