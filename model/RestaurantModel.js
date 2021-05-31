"use strict";
exports.__esModule = true;
exports.restaurantModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.dataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.dataAccess.mongooseInstance;
var restaurantModel = /** @class */ (function () {
    function restaurantModel() {
        this.createSchema();
        this.createModel();
    }
    restaurantModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            restaurantId: Number,
            name: String,
            url: String,
            locationState: String,
            locationZip: String,
            locationCity: String,
            price: String,
            tags: [
                String
            ],
            reviews: [
                {
                    source: String,
                    description: String,
                    rating: Number
                }
            ],
            feedback: [
                {
                    userId: Number,
                    comment: String,
                    rating: Number
                }
            ]
        }, { collection: 'restaurants' });
    };
    restaurantModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Restaurant", this.schema);
    };
    restaurantModel.prototype.retrieveRestaurantDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    restaurantModel.prototype.retrieveAllRestaurants = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return restaurantModel;
}());
exports.restaurantModel = restaurantModel;
