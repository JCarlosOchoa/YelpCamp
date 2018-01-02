var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");
var methodOverride = require("method-override");
var flash = require("connect-flash");
var path = require("path");

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var authRoutes = require("./routes/index");
// var seedDB = require("./seeds");
// mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost/yelp_camp_v11");
mongoose.connect("mongodb://CarlosOchoa:Kingdomhearts2!@ds129315.mlab.com:29315/yelpcamp_carlos_version");
//mongodb://CarlosOchoa:Kingdomhearts2!@ds129315.mlab.com:29315/yelpcamp_carlos_version
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(flash());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
// seedDB();

// PASSPORT CONFIGURATION
app.use(require("cookie-session")({
	secret: "A secret, this is.",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

// requiring routes
app.use(authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen((process.env.PORT || 3000), "localhost", function(){
	console.log("YelpCamp server has started!");
});