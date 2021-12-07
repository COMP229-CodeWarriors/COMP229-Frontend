const express = require('express')
const path = require("path");

const app = express()

app.use(express.static('./dist/Survey-site'));

app.get('/*', (req, res) =>
     res.sendFile("index.html", {root:'dist/Survey-site/'})
        
app.listen(process.env.PORT || 8080));
