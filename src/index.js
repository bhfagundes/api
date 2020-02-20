const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//para trabalhar com json
app.use(bodyParser.json());
//decodificação de url
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send('OK');
});

app.listen(3000);