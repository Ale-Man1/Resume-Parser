const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const pdf = require('pdf-parse');


const app = express();
//var server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus:200
}

app.use(cors())
app.use('/', router)

app.use("", require("./routes/router"))
app.get('/resumes', (req,res) => {
    res.send("From Server")
})

app.listen(3000, function(){
    console.log("express server is listening on ")
}
)