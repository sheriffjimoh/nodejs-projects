const express = require('express');

// const app = express();

// Application-level middleware to log request method and path
// app.use(function(req, res, next) { 
//     console.log(req.method, req.path); 
//     next();
// });

// app.get('/', function (req, res) {    
//     res.send("<h1>Demo page Get</h1>");
// });
// app.post('/', function (req, res) {    
//     res.send("<h1>Demo page Post</h1>");
// });
// app.put('/', function (req, res) {    
//     res.send("<h1>Demo page Put</h1>");
// });
// app.delete('/', function (req, res) {    
//     res.send("<h1>Demo page Delete</h1>");
// });

const path = require('path')

const app = express();

app.use(function (req, res, next) {
    console.log(req.method, req.path);
    next();
});

app.use(express.static(path.join(__dirname, 'static')))

app.get('/demo', function (req, res) {    
    res.sendFile(path.join(__dirname, 'static/index.html'))
});


app.listen(3000, function () {
    console.log("Listening on port 3000. Go to http://localhost:3000");
});