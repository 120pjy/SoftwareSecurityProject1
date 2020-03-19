/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

/* Create your schema */
var StudySpotSchema = new Schema({
  /* your code here */
  type: {type: Feature},
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  upvote: {type: Number, unique: true},
  downvote: {type: Number, unique: true},
  isQuiet: Boolean,
  //address: { type: String, unique: true },
  coordinates: {
	  { type: Number, unique: true },
	  { type: Number, unique: true }
  },
  created_at: Date,
  updated_at: Date
  type: {type: Point}
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
StudySpotSchema.pre('save', function(next) {
  /* your code here */
  var current_Date = new Date();
  this.updated_at = current_Date;
  if(!this.created_at)
	  this.created_at = current_Date;
  next();

});

/* Use your schema to instantiate a Mongoose model */
var StudySpot = mongoose.model('StudySpot', StudySpotSchema);



/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
