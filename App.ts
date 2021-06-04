import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
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
        this.googlePassportObj = new GooglePassportObj();

        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 999;
        this.Users = new userModel();
        this.Restaurants = new restaurantModel();
        this.SavedLists = new savedListModel();
    }

    private middleware(): void {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({extended: false}));
        this.expressApp.use(session({ secret: 'mi1Oo19jV4hrYUilwxV55q0I' }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    }

    private validateAuth(req, res, next):void {
        if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
        console.log("user is not authenticated");
        res.redirect('/');
    }

    private routes(): void {

        let router = express.Router();

        this.expressApp.use( (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.expressApp.use('/', router);
        this.expressApp.use('/images', express.static(__dirname + '/img'));
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
                console.log("redirecting to /#/restaurant");
                res.redirect('/#/restaurant');
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
            res.send(this.idGenerator.toString());
            this.idGenerator++;
        });


    }
}

export {App};
