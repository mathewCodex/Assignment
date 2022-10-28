const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// "geometry": {
//    "type": "Point",
//    "coordinates": [125.6, 10.1]
//  }

 //creategeolocation schema
 const GeoSchema = new Schema({
   type: {
     type:String,
     default: "Point"
   },
   coordinates:{
     type:[Number],
     index: '2dsphere'
   }
 })


// creating our flight schema
const flightSchema = new Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    price: {
      type: String,
      required: true,
    },
    Date: [Date],
  },
  
  { timestamps: true }
);
//sharing a blog collection from my database
const Blog = mongoose.model("Blog", flightSchema);
module.exports = Blog;


//creating our ninja / users model to represent our collections..

