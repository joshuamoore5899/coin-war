const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;


app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (req, res) => {
  res.sendFile(__dirname + '/js/main.js')
})

app.get('/css/style.css', (req, res) => {
  res.sendFile(__dirname + '/css/style.css')
})

app.get('/images/heads.jpg', (req, res) => {
  res.sendFile(__dirname + '/images/heads.jpg')
})

app.get('/images/tails.jpg', (req, res) => {
  res.sendFile(__dirname + '/images/tails.jpg')
})

app.get('/api', (req, res) => {
  let result = Math.random() * 100;
  let ans = "";
  if (result < 50) {
    ans = "HEADS";
  }
  else {
    ans = "TAILS";
  }
  const objToJson = {
    result: ans,
  }
  res.json(objToJson);
})

// const server = http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   if (page === '/') {
//     fs.readFile('index.html', function (err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page === '/api') {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     let result = Math.random() * 100;
//     let ans = "";
//     if (result < 50) {
//       ans = "HEADS";
//     }
//     else {
//       ans = "TAILS";
//     }
//     const objToJson = {
//       result: ans,
//     }
//     res.end(JSON.stringify(objToJson));
//   }
//   else if (page === '/css/style.css') {
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     })
//   }
//   else if (page === '/js/main.js') {
//     fs.readFile('js/main.js', function (err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     })
//   }
//   else {
//     figlet('404 !', function(err, data) {
//       if (err) {
//         console.log('Error');
//         console.dir(err);
//         return;
//       }
//       res.write(data);
//       res.end();
//     })
//   }
// })

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})
