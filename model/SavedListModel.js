"use strict";
exports.__esModule = true;
exports.savedListModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.dataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.dataAccess.mongooseInstance;
var savedListModel = /** @class */ (function () {
    function savedListModel() {
        this.createSchema();
        this.createModel();
    }
    savedListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: Number,
            favorites: [
                {
                    restaurantId: Number
                }
            ],
            blocked: [
                {
                    restaurantId: Number
                }
            ],
            history: [
                {
                    restaurantId: Number
                }
            ]
        }, { collection: 'savedLists' });
    };
    savedListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("SavedList", this.schema);
    };
    savedListModel.prototype.retrieveSavedListDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    savedListModel.prototype.retrieveAllSavedLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return savedListModel;
}());
exports.savedListModel = savedListModel;
