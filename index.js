const fetch = require('node-fetch');

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => ...)

