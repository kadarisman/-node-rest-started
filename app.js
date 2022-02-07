const http          = require('http');
const port          = 7000;
const express       = require('express');
require('dotenv').config();
const bodyParser    = require('body-parser');
const app           = express();  

const router        = require('./routers/index');

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

/*ROUTERS*/
app.use(router);

server.listen(port)

console.log(`server running http://localhost:${port}`);






