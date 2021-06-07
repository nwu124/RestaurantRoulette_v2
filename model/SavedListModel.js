"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.dataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.dataAccess.mongooseInstance;
class savedListModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            userId: Number,
            favorites: [
                {
                    restaurantId: Number,
                }
            ],
            blocked: [
                {
                    restaurantId: Number,
                }
            ],
            history: [
                {
                    restaurantId: Number,
                }
            ]
        }, { collection: 'savedLists' });
    }
    createModel() {
        this.model = mongooseConnection.model("SavedList", this.schema);
    }
    retrieveSavedListDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveAllSavedLists(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.savedListModel = savedListModel;
