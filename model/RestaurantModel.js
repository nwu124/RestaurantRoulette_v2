"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.dataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.dataAccess.mongooseInstance;
class restaurantModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
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
    }
    createModel() {
        this.model = mongooseConnection.model("Restaurant", this.schema);
    }
    retrieveRestaurantDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveAllRestaurants(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.restaurantModel = restaurantModel;
