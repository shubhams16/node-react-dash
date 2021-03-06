var express= require("express")
var cors= require("cors")
var bodyParser= require("body-parser")

var app= express()
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
    res.send('Hello Shubham');
  });

var Users =require('./routes/Users')
app.use('/users', Users)

app.listen(port, () => {
    console.log("server is running on port: " + port)
})