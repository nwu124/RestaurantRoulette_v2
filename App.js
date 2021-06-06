"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var UserModel_1 = require("./model/UserModel");
var RestaurantModel_1 = require("./model/RestaurantModel");
var SavedListModel_1 = require("./model/SavedListModel");
var GooglePassport_1 = require("./GooglePassport");
var passport = require("passport");
var App = /** @class */ (function () {
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 999;
        this.Users = new UserModel_1.userModel();
        this.Restaurants = new RestaurantModel_1.restaurantModel();
        this.SavedLists = new SavedListModel_1.savedListModel();
        this.googlePassportObj = new GooglePassport_1["default"](this.Users);
    }
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({
            secret: 'mi1Oo19jV4hrYUilwxV55q0I',
            resave: true,
            saveUninitialized: true
        }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    };
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        this.expressApp.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/angularDist'));
        console.log("__dirname: " + __dirname);
        router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to /#/restaurant");
            res.redirect('/#/restaurant');
        });
        //****************************************
        //SAVED LISTS
        router.get('/app/savedlist/', function (req, res) {
            console.log('Query All savedList');
            _this.SavedLists.retrieveAllSavedLists(res);
        });
        router.get('/app/savedlist/:userId', function (req, res) {
            var id = req.params.userId;
            console.log('Query single savedList with id: ' + id);
            _this.SavedLists.retrieveSavedListDetails(res, { userId: id });
        });
        router.post('/app/savedlist/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userId = _this.idGenerator;
            _this.SavedLists.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('SavedList object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.put('/app/savedlist/update/:userId', function (req, res) {
            var id = req.params.userId;
            console.log(req.body);
            var jsonObj = req.body;
            _this.SavedLists.model.findOneAndUpdate({ userId: id }, jsonObj, function (err) {
                if (err) {
                    res.send('SavedList object update failed for id: ' + id);
                }
            });
            res.send('SavedList updated for id: ' + id);
        });
        //****************************************
        //RESTAURANTS
        router.get('/app/restaurant/', function (req, res) {
            console.log('Query All restaurants');
            _this.Restaurants.retrieveAllRestaurants(res);
        });
        router.get('/app/restaurant/:restaurantId', function (req, res) {
            var id = req.params.restaurantId;
            console.log('Query single restaurant with id: ' + id);
            _this.Restaurants.retrieveRestaurantDetails(res, { restaurantId: id });
        });
        //****************************************
        //USERS
        router.get('/app/user/', function (req, res) {
            console.log('Query All users');
            _this.Users.retrieveAllUsers(res);
        });
        router.get('/app/user/:userId', function (req, res) {
            var id = req.params.userId;
            console.log('Query single user with id: ' + id);
            _this.Users.retrieveUserDetails(res, { userId: id });
        });
        router.post('/app/user/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userId = _this.idGenerator;
            _this.Users.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('User object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
    };
    return App;
}());
exports.App = App;
