import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as  cookieSession from "cookie-session";
import {userModel} from "./model/UserModel";
import {restaurantModel} from "./model/RestaurantModel";
import {savedListModel} from "./model/SavedListModel";

import GooglePassportObj from './GooglePassport';
import * as passport from 'passport';

class App {

    public expressApp: express.Application;
    public Users: userModel;
    public Restaurants: restaurantModel;
    public SavedLists: savedListModel;
    public idGenerator: number;
    public googlePassportObj:GooglePassportObj;

    constructor() {
        this.expressApp = express();

        this.middleware();
        this.routes();
        this.idGenerator = 999;
        this.Users = new userModel();
        this.Restaurants = new restaurantModel();
        this.SavedLists = new savedListModel();
        this.googlePassportObj = new GooglePassportObj(this.Users, this.SavedLists);
    }

    private middleware(): void {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({extended: false}));
        // this.expressApp.use(
        //     session({
        //         secret: 'mi1Oo19jV4hrYUilwxV55q0I',
        //         cookieKey:"mi1Oo19jV4hrYUilwxV55q0I",
        //         resave: true,
        //         saveUninitialized: true,
        //     }));
        this.expressApp.use(cookieParser());

        this.expressApp.use(cookieSession({
            // milliseconds of a day
            maxAge: 24*60*60*1000,
            keys:['mi1Oo19jV4hrYUilwxV55q0I']
        }));
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    }
    private routes(): void {

        let router = express.Router();

        this.expressApp.use( (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.expressApp.use('/#/app/protected', function (req, res, next) {
            if (req.isAuthenticated()) {
                console.log("user is authenticated");
                return next();
            }
            console.log("User is not authenticated");
            res.redirect('#/auth/login');

        });

        this.expressApp.use('/app/', function (req, res, next) {
            if (req.isAuthenticated()) {
                console.log("user is authenticated");
                return next();
            }
            console.log("User is not authenticated");
            res.redirect('#/auth/login');
            res.status(401);
            res.send('Unauthorized');
        });

        this.expressApp.get("/auth/isAuth", (req, res, next) => {
            if (req.isAuthenticated()) {
                console.log("User is authenticated");
                res.send({"isAuth": true, "userId": req.session.passport.user.id});
            }
            else{
                console.log("User is NOT authenticated");
                res.send({"isAuth": false, "userId": -1});
            }
        });

        // this.expressApp.use('/#/app/protected', function(req,res, next){
        //     if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
        //     console.log("user is not authenticated");
        //     res.redirect('/');
        // });


        this.expressApp.get("/auth/logout", (req, res) => {
            req.logout();
            console.log("user logged out");
            res.redirect('/');
        });


        this.expressApp.use('/', router);
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/pages', express.static(__dirname + '/pages'));
        this.expressApp.use('/', express.static(__dirname + '/angularDist'));
        console.log("__dirname: " + __dirname);

        router.get('/auth/google',
            passport.authenticate('google', {scope: ['profile', 'email']}));


        router.get('/auth/google/callback',
            passport.authenticate('google',
                { failureRedirect: '/' }
            ),
            (req, res) => {
                console.log("successfully authenticated user and returned to callback page.");
                console.log("redirecting to /index");
                res.redirect('/');
            }
        );
        //****************************************
        //SAVED LISTS
        router.get('/app/savedlist/', (req, res) => {
            console.log('Query All savedList');
            this.SavedLists.retrieveAllSavedLists(res);
        });

        router.get('/app/savedlist/:userId', (req, res) => {
            var id = req.params.userId;
            console.log('Query single savedList with id: ' + id);
            this.SavedLists.retrieveSavedListDetails(res, {userId: id});
        });

        router.post('/app/savedlist/', (req, res) => {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userId = this.idGenerator;
            this.SavedLists.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('SavedList object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            this.idGenerator++;
        });

        router.put('/app/savedlist/update/:userId', (req, res) => {
            var id = req.params.userId;
            console.log(req.body);
            var jsonObj = req.body;
            this.SavedLists.model.findOneAndUpdate({userId: id}, jsonObj, (err) => {
                if (err) {
                    res.send('SavedList object update failed for id: ' + id);
                }
            });
            res.send('SavedList updated for id: ' + id);
        });

        //****************************************
        //RESTAURANTS
        router.get('/app/restaurant/', (req, res) => {
            console.log('Query All restaurants');
            this.Restaurants.retrieveAllRestaurants(res);
        });

        router.get('/app/restaurant/:restaurantId', (req, res) => {
            var id = req.params.restaurantId;
            console.log('Query single restaurant with id: ' + id);
            this.Restaurants.retrieveRestaurantDetails(res, {restaurantId: id});
        });

        //****************************************
        //USERS
        router.get('/app/user/', (req, res) => {
            console.log('Query All users');
            this.Users.retrieveAllUsers(res);
        });

        router.get('/app/user/:userId', (req, res) => {
            var id = req.params.userId;
            console.log('Query single user with id: ' + id);
            this.Users.retrieveUserDetails(res, {userId: id});
        });

        router.post('/app/user/', (req, res) => {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userId = this.idGenerator;
            this.Users.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('User object creation failed');
                }
            });
            res.send(jsonObj);
            this.idGenerator++;
        });


    }
}

export {App};
