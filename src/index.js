import './index.css';

const url = `http://ec2-18-235-0-2.compute-1.amazonaws.com:80/videos/_stats`;
let username = 'admin';
let password = 'admin';
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
headers.set( 'Content-Type','application/json');
headers.set('Accept', 'application/json');
// headers.set('User-Agent', "MY-UA-STRING');
// const httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
//   });
fetch( url, {
    headers: headers
}).then(response => response.json())
.then(function(response) {
    console.info('fetch()', response);
    console.log(response.json());
})
.catch( function (err) {
    console.log(err)
});

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));
