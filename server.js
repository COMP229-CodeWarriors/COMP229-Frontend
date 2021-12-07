const express = require('express')
const path = require("path");

const app = express()

app.use(express.static(__dirname + './dist/Survey-site'));

app.get('*', (req, res) =>
     res.sendFile(path.join(__dirname + 'dist/Survey-site/index.html'))
        
app.listen(process.env.PORT || 8080));
