const express = require('express');
const router = express.Router();
const Flight = require('../models/flightAPI');

//get  a list of all my Booking flight API from the database


router.get('/allFLight',function(req,res,next){
  Flight.find({}).then(function(flight){
    res.send(flight);
  })  .catch((err) => {
       console.log(err);
     });

 
 });
//  finding api by id:
router.get('/allFLight/:id',function(req,res,next){
  const id = req.params.id;
  Flight.findById(id).then(function(flight){
    res.send(flight);
  })  .catch((err) => {
       console.log(err);
     });
    })
 

//addeng a new flight to the database..
router.post('/bookFlight',function(req,res,next) {
  Flight.create(req.body).then(function(flight){
  res.send(flight)
}).catch(next)
});
//updating a flight in a database...
router.put('/editFlight/:id',function(req,res,next){
  Flight.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(flight){
          res.send(flight)
    })

  })

});
//deleting a flight from the db
router.delete('/deleteFLight/:id',function(req,res,next){
Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
  res.send(ninja);
})

});

//exporting routes..

module.exports = router;
