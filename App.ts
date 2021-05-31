import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {userModel} from "./model/UserModel";
import {restaurantModel} from "./model/RestaurantModel";
import {savedListModel} from "./model/SavedListModel";

class App {

    public expressApp: express.Application;
    public Users: userModel;
    public Restaurants: restaurantModel;
    public SavedLists: savedListModel;
    public idGenerator: number;

    constructor() {
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
    }

    private routes(): void {

      let router = express.Router();

      this.expressApp.use( (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

      // this.expressApp.use('/', router);
      // this.expressApp.use('/json', expressApp.static(__dirname+'/json'));

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

        this.expressApp.use('/', router);

        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
        this.expressApp.use('/', express.static(__dirname + '/dist/app'));
    }
}

export {App};
