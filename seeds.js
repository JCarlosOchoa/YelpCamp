var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
// mongoose.Promise = global.Promise;

var data = [
	{
		name: "Salmon Creek", 
		image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
		description: "blah blahblah blah blah"
	},
	{
		name: "Salmon Creek", 
		image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
		description: "blah blahblah blah blah"
	},
	{
		name: "Salmon Creek", 
		image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
		description: "blah blahblah blah blah"
	}
]

function seedDB(){
	//remove all campgrounds
	Campground.remove({}, function(err){
		// if(err) {
		// 	console.log(err);
		// } else {
		// 	//add campgrounds
		// 	data.forEach(function(seed){
		// 		Campground.create(seed, function(err, campground){
		// 			if(err) {
		// 				console.log(err);
		// 			} else {
		// 				console.log("added campgrounds");
		// 				// create comment
		// 				Comment.create(
		// 				{
		// 					text: "This is great and stuff",
		// 					author: "Me"
		// 				}, function(err, comment){
		// 					if(err) {
		// 						console.log(err);
		// 					} else {
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("added comment", campground);
		// 					}
		// 				});
		// 			}
		// 		});
		// 	});
		// }
	});
}

module.exports = seedDB;