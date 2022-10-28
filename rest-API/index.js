const express = require('express');
// const routes = require('./routes/api')
//requireing parser..
const bodyParser = require('body-parser')
//connecting to mngoose
const mongoose = require('mongoose');
//setting up express app
const app = express();
const dBURI =
  "mongodb+srv://<username>:<Password>@cluster1.avjfq.mongodb.net/*****?retryWrites=true&w=majority";
mongoose
  .connect(dBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
//converting mongoose promise to global promise.
mongoose.Promise = global.Promise;
//creating static middleware..
app.use(express.static('public'))
//setting up our routes for express to know we ant to use the route..
app.use(bodyParser.json());
//this initialize the routes..
app.use('/api',require('./routes/api'));
//creating middle ware for error handling
app.use(function(err,req,res,next){
  //console.log(err)
  res.status(400).send({error: err.message})
})
// app.get('/',function(req,res){
//   console.log('GEt request')
//   res.send({name:'mathew'});
// })
//listening for request..
//when deploying this app there might be a environment variable which provides ..
//port to listen to so we will provide one
app.listen(process.env.port || 4000,function(){
  console.log('Hey We are listening for request')
});
